import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  installAdDocumentBoundary,
  isAdDocumentReady,
} from './adsterra-document-boundary.ts';

function browser(pathname = '/codes') {
  const listeners = new Map<string, Set<(event: unknown) => void>>();
  const navigations: string[] = [];
  const location = {
    href: `https://searchfortheneedle.wiki${pathname}`,
    pathname,
    origin: 'https://searchfortheneedle.wiki',
    assign(url: string) {
      navigations.push(`assign:${url}`);
    },
    replace(url: string) {
      navigations.push(`replace:${url}`);
    },
  };
  const view = {
    location,
    addEventListener(type: string, callback: (event: unknown) => void) {
      const values = listeners.get(type) ?? new Set();
      values.add(callback);
      listeners.set(type, values);
    },
    removeEventListener(type: string, callback: (event: unknown) => void) {
      listeners.get(type)?.delete(callback);
    },
  };
  function emit(type: string, event = {}) {
    for (const callback of listeners.get(type) ?? []) callback(event);
  }
  function click(href: string, overrides = {}) {
    const event = {
      button: 0,
      defaultPrevented: false,
      metaKey: false,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      target: {
        closest() {
          return {
            href,
            target: '',
            hasAttribute() {
              return false;
            },
          };
        },
      },
      preventDefault() {
        event.defaultPrevented = true;
      },
      stopImmediatePropagation() {},
      ...overrides,
    };
    emit('click', event);
    return event;
  }
  return {
    view: view as unknown as Window,
    location,
    navigations,
    listeners,
    emit,
    click,
  };
}

describe('clean advertising document boundary', () => {
  it('uses a complete document navigation before a clean link reaches SPA handlers', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    const click = b.click('https://searchfortheneedle.wiki/privacy?from=footer');
    assert.equal(click.defaultPrevented, true);
    assert.deepEqual(b.navigations, [
      'assign:https://searchfortheneedle.wiki/privacy?from=footer',
    ]);
    assert.equal(isAdDocumentReady(b.view, '/codes'), false);
    dispose();
  });

  it('preserves SPA navigation between ordinary content pages', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    assert.equal(
      b.click('https://searchfortheneedle.wiki/guides').defaultPrevented,
      false
    );
    assert.deepEqual(b.navigations, []);
    assert.equal(isAdDocumentReady(b.view, '/guides'), true);
    dispose();
  });

  it('also starts a new document when leaving a clean page', () => {
    const b = browser('/privacy');
    const dispose = installAdDocumentBoundary(b.view);
    b.click('https://searchfortheneedle.wiki/codes');
    assert.deepEqual(b.navigations, [
      'assign:https://searchfortheneedle.wiki/codes',
    ]);
    dispose();
  });

  it('leaves modified clicks and links to other origins to the browser', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    assert.equal(
      b.click('https://searchfortheneedle.wiki/privacy', { ctrlKey: true })
        .defaultPrevented,
      false
    );
    assert.equal(
      b.click('https://example.org/privacy').defaultPrevented,
      false
    );
    assert.deepEqual(b.navigations, []);
    dispose();
  });

  it('reloads a clean history destination and blocks pending ad loads immediately', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    b.location.pathname = '/privacy';
    b.location.href = 'https://searchfortheneedle.wiki/privacy';
    b.emit('popstate');
    assert.deepEqual(b.navigations, [
      'replace:https://searchfortheneedle.wiki/privacy',
    ]);
    assert.equal(isAdDocumentReady(b.view, '/codes'), false);
    dispose();
  });

  it('keeps clean documents ineligible even without a navigation listener', () => {
    const b = browser('/privacy');
    assert.equal(isAdDocumentReady(b.view, '/privacy'), false);
    assert.equal(isAdDocumentReady(b.view, '/codes'), false);
  });

  it('restores eligibility when the browser restores the original ad document', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    b.click('https://searchfortheneedle.wiki/privacy');
    assert.equal(isAdDocumentReady(b.view, '/codes'), false);
    b.emit('pageshow', { persisted: true });
    assert.equal(isAdDocumentReady(b.view, '/codes'), true);
    dispose();
  });

  it('removes its navigation listeners on cleanup', () => {
    const b = browser();
    const dispose = installAdDocumentBoundary(b.view);
    dispose();
    b.click('https://searchfortheneedle.wiki/privacy');
    b.emit('popstate');
    assert.deepEqual(b.navigations, []);
    assert.ok(
      [...b.listeners.values()].every((listeners) => listeners.size === 0)
    );
  });
});
