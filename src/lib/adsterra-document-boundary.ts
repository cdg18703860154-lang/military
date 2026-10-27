import { isAdEligibleRoute } from './ad-layout.ts';

const isCleanAdPath = (pathname: string) => !isAdEligibleRoute(pathname);

const documents = new WeakMap<
  Window,
  { clean: boolean; navigating: boolean }
>();

export function isAdDocumentReady(view: Window, pathname: string): boolean {
  return (
    !documents.get(view)?.navigating &&
    !isCleanAdPath(view.location.pathname) &&
    !isCleanAdPath(pathname)
  );
}

export function ensureAdDocumentBoundary(view: Window): void {
  const document = documents.get(view);
  if (
    document &&
    !document.navigating &&
    document.clean !== isCleanAdPath(view.location.pathname)
  ) {
    document.navigating = true;
    view.location.replace(view.location.href);
  }
}

// Global ad providers register their own document listeners and timers. Starting a
// new document at the policy boundary destroys that runtime, including unknown
// provider side effects which removing the original script cannot clean up.
export function installAdDocumentBoundary(view: Window): () => void {
  const document = {
    clean: isCleanAdPath(view.location.pathname),
    navigating: false,
  };
  documents.set(view, document);

  const onClick = (event: MouseEvent) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;

    const anchor = (event.target as Element | null)?.closest?.(
      'a[href]'
    ) as HTMLAnchorElement | null;
    if (
      !anchor ||
      anchor.hasAttribute('download') ||
      (anchor.target && anchor.target !== '_self')
    )
      return;

    const destination = new URL(anchor.href, view.location.href);
    if (
      destination.origin !== view.location.origin ||
      isCleanAdPath(destination.pathname) === document.clean
    )
      return;

    event.preventDefault();
    event.stopImmediatePropagation();
    document.navigating = true;
    view.location.assign(destination.href);
  };
  const onPopState = () => ensureAdDocumentBoundary(view);
  const onPageShow = () => {
    document.navigating = false;
    ensureAdDocumentBoundary(view);
  };

  // Window capture runs before Next's link handler and provider document clicks.
  view.addEventListener('click', onClick, true);
  view.addEventListener('popstate', onPopState);
  view.addEventListener('pageshow', onPageShow);
  return () => {
    view.removeEventListener('click', onClick, true);
    view.removeEventListener('popstate', onPopState);
    view.removeEventListener('pageshow', onPageShow);
    if (documents.get(view) === document) documents.delete(view);
  };
}
