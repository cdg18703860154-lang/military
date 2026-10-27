import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { mountAdsterraBanner } from './adsterra-banner-loader.ts';

function createBrowser() {
  const timers = new Map<number, () => void>();
  let timerId = 0;
  const view = {
    atOptions: undefined as unknown,
    setTimeout(callback: () => void) {
      timers.set(++timerId, callback);
      return timerId;
    },
    clearTimeout(id: number) {
      timers.delete(id);
    },
  };
  const document = {
    defaultView: view,
    createElement(tag: string) {
      assert.equal(
        tag,
        'script',
        'mount the official script, not a srcDoc iframe'
      );
      return {
        src: '',
        async: true,
        type: '',
        dataset: {} as Record<string, string>,
        onload: null as (() => void) | null,
        onerror: null as (() => void) | null,
      };
    },
  };
  function host() {
    const children: ReturnType<typeof document.createElement>[] = [];
    let hasCreative = false;
    return {
      ownerDocument: document,
      isConnected: true,
      children,
      querySelector() {
        return hasCreative ? {} : null;
      },
      showCreative() {
        hasCreative = true;
      },
      replaceChildren() {
        children.length = 0;
        hasCreative = false;
      },
      appendChild(script: ReturnType<typeof document.createElement>) {
        children.push(script);
      },
    };
  }
  return { view, host, timers };
}

const unit = {
  key: 'berry728',
  scriptUrl: 'https://ads.example/berry728/invoke.js',
  width: 728,
  height: 90,
};

async function flushQueue() {
  await new Promise<void>((resolve) => setImmediate(resolve));
}

describe('direct Adsterra banner loading', () => {
  it('sets the approved options before appending the official script to its slot', async () => {
    const browser = createBrowser();
    const host = browser.host();
    const states: string[] = [];
    const dispose = mountAdsterraBanner(
      host as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    await flushQueue();

    assert.deepEqual(browser.view.atOptions, {
      key: 'berry728',
      format: 'iframe',
      width: 728,
      height: 90,
      params: {},
    });
    assert.equal(host.children[0].src, unit.scriptUrl);
    assert.equal(host.children[0].async, false);
    assert.equal(host.children[0].dataset.cfasync, 'false');
    host.children[0].onload?.();
    assert.equal(states.at(-1), 'script-loaded');
    assert.ok(
      !states.includes('filled'),
      'script load does not prove an ad was filled'
    );
    dispose();
    assert.equal(host.children.length, 0);
    assert.equal(browser.timers.size, 0);
  });

  it('reports no fill when the provider script loads without a creative', async () => {
    const browser = createBrowser();
    const host = browser.host();
    const next = browser.host();
    const states: string[] = [];
    const dispose = mountAdsterraBanner(
      host as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    const disposeNext = mountAdsterraBanner(
      next as unknown as HTMLElement,
      { ...unit, key: 'berry468', width: 468, height: 60 },
      () => {}
    );
    await flushQueue();

    assert.equal(next.children.length, 0);
    host.children[0].onload?.();
    for (const callback of [...browser.timers.values()]) callback();
    await flushQueue();

    assert.deepEqual(states, ['loading', 'script-loaded', 'no-fill']);
    assert.equal(host.children.length, 0);
    assert.equal(next.children.length, 1);
    dispose();
    disposeNext();
  });

  it('reports a filled banner when the provider creates visible output', async () => {
    const browser = createBrowser();
    const host = browser.host();
    const states: string[] = [];
    const dispose = mountAdsterraBanner(
      host as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    await flushQueue();

    host.showCreative();
    host.children[0].onload?.();

    assert.deepEqual(states, ['loading', 'script-loaded', 'filled']);
    dispose();
  });

  it('serializes banners so that concurrent slots cannot overwrite atOptions', async () => {
    const browser = createBrowser();
    const first = browser.host();
    const second = browser.host();
    const disposeFirst = mountAdsterraBanner(
      first as unknown as HTMLElement,
      unit,
      () => {}
    );
    const disposeSecond = mountAdsterraBanner(
      second as unknown as HTMLElement,
      { ...unit, key: 'berry300', width: 300, height: 250 },
      () => {}
    );
    await flushQueue();
    assert.equal(first.children.length, 1);
    assert.equal(second.children.length, 0);
    assert.equal((browser.view.atOptions as typeof unit).key, 'berry728');
    first.showCreative();
    first.children[0].onload?.();
    await flushQueue();
    assert.equal(second.children.length, 1);
    assert.equal((browser.view.atOptions as typeof unit).key, 'berry300');
    second.showCreative();
    second.children[0].onload?.();
    disposeFirst();
    disposeSecond();
  });

  it('continues after a failed script and never mounts a cancelled queued slot', async () => {
    const browser = createBrowser();
    const first = browser.host();
    const cancelled = browser.host();
    const last = browser.host();
    const states: string[] = [];
    const disposeFirst = mountAdsterraBanner(
      first as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    const disposeCancelled = mountAdsterraBanner(
      cancelled as unknown as HTMLElement,
      unit,
      () => {}
    );
    const disposeLast = mountAdsterraBanner(
      last as unknown as HTMLElement,
      unit,
      () => {}
    );
    disposeCancelled();
    await flushQueue();
    first.children[0].onerror?.();
    await flushQueue();
    assert.equal(states.at(-1), 'script-error');
    assert.equal(first.children.length, 0);
    assert.equal(cancelled.children.length, 0);
    assert.equal(last.children.length, 1);
    last.children[0].onload?.();
    disposeFirst();
    disposeLast();
  });

  it('settles active cancellation immediately without letting a late script read another key', async () => {
    const browser = createBrowser();
    const first = browser.host();
    const second = browser.host();
    const nextStates: string[] = [];
    const disposeFirst = mountAdsterraBanner(
      first as unknown as HTMLElement,
      unit,
      () => {}
    );
    const disposeSecond = mountAdsterraBanner(
      second as unknown as HTMLElement,
      { ...unit, key: 'berry300' },
      (state) => nextStates.push(state)
    );
    await flushQueue();
    const lateLoad = first.children[0].onload;
    disposeFirst();
    await flushQueue();

    assert.equal(browser.timers.size, 0);
    assert.equal(first.children.length, 0);
    assert.equal(second.children.length, 0);
    assert.equal(nextStates.at(-1), 'script-cancelled');
    lateLoad?.();
    assert.equal((browser.view.atOptions as typeof unit).key, 'berry728');
    disposeSecond();
  });

  it('handles a blocked script insertion without poisoning the queue', async () => {
    const browser = createBrowser();
    const blocked = browser.host();
    const next = browser.host();
    const states: string[] = [];
    blocked.appendChild = () => {
      throw new Error('Script insertion blocked');
    };
    const disposeBlocked = mountAdsterraBanner(
      blocked as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    const disposeNext = mountAdsterraBanner(
      next as unknown as HTMLElement,
      unit,
      () => {}
    );
    await flushQueue();
    assert.equal(states.at(-1), 'script-error');
    assert.equal(next.children.length, 1);
    next.children[0].onload?.();
    disposeBlocked();
    disposeNext();
  });

  it('stops safely on timeout without starting another script with conflicting options', async () => {
    const browser = createBrowser();
    const first = browser.host();
    const second = browser.host();
    const states: string[] = [];
    const disposeFirst = mountAdsterraBanner(
      first as unknown as HTMLElement,
      unit,
      (state) => states.push(state)
    );
    const disposeSecond = mountAdsterraBanner(
      second as unknown as HTMLElement,
      { ...unit, key: 'berry300' },
      (state) => states.push(state)
    );
    await flushQueue();
    for (const callback of [...browser.timers.values()]) callback();
    await flushQueue();
    assert.equal(first.children.length, 0);
    assert.equal(second.children.length, 0);
    assert.equal((browser.view.atOptions as typeof unit).key, 'berry728');
    assert.equal(states.at(-1), 'script-timeout');
    disposeFirst();
    disposeSecond();
  });
});

it('a removed frame cannot block another frame Window or overwrite its new size', async () => {
  const oldFrame = createBrowser();
  const newFrame = createBrowser();
  const oldHost = oldFrame.host();
  const nextHost = newFrame.host();
  const disposeOld = mountAdsterraBanner(oldHost as unknown as HTMLElement, unit, () => {});
  await flushQueue();
  const lateLoad = oldHost.children[0].onload;
  disposeOld();
  const nextUnit = { ...unit, key: 'bottom-mobile', width: 320, height: 50 };
  const disposeNext = mountAdsterraBanner(nextHost as unknown as HTMLElement, nextUnit, () => {});
  await flushQueue();
  assert.equal(nextHost.children.length, 1);
  assert.equal((newFrame.view.atOptions as typeof unit).key, 'bottom-mobile');
  lateLoad?.();
  assert.equal((newFrame.view.atOptions as typeof unit).key, 'bottom-mobile');
  assert.equal(oldFrame.timers.size, 0);
  disposeNext();
  assert.equal(newFrame.timers.size, 0);
});
