export interface BannerUnit {
  key: string;
  scriptUrl: string;
  width: number;
  height: number;
}

export type BannerLoadState =
  | 'loading'
  | 'script-loaded'
  | 'filled'
  | 'no-fill'
  | 'script-error'
  | 'script-timeout'
  | 'script-cancelled';

type BannerWindow = Window & {
  atOptions?: Omit<BannerUnit, 'scriptUrl'> & {
    format: 'iframe';
    params: Record<string, never>;
  };
};

const runtimes = new WeakMap<
  Window,
  {
    queue: Promise<void>;
    blockedReason: 'script-timeout' | 'script-cancelled' | null;
  }
>();

function hasCreative(container: HTMLElement): boolean {
  try {
    return Boolean(container.querySelector('iframe, a, img, object, embed'));
  } catch {
    return false;
  }
}

export function mountAdsterraBanner(
  container: HTMLElement,
  unit: BannerUnit,
  onState: (state: BannerLoadState) => void
): () => void {
  const view = container.ownerDocument.defaultView as BannerWindow | null;
  if (!view) return () => {};

  const runtime = runtimes.get(view) ?? {
    queue: Promise.resolve(),
    blockedReason: null,
  };
  runtimes.set(view, runtime);
  let cancelled = false;
  let cancelActive: (() => void) | undefined;

  // atOptions is shared by the provider: finish one invocation before starting another.
  runtime.queue = runtime.queue.then(
    () =>
      new Promise<void>((resolve) => {
        if (cancelled || !container.isConnected) return resolve();
        if (runtime.blockedReason) {
          onState(runtime.blockedReason);
          return resolve();
        }

        container.replaceChildren();
        const script = container.ownerDocument.createElement('script');
        let settled = false;
        let scriptLoaded = false;
        let fillTimeout: number | undefined;
        const finish = (state: BannerLoadState) => {
          if (settled) return;
          settled = true;
          cancelActive = undefined;
          view.clearTimeout(timeout);
          if (fillTimeout !== undefined) view.clearTimeout(fillTimeout);
          script.onload = null;
          script.onerror = null;
          if (cancelled || state !== 'filled') container.replaceChildren();
          if (!cancelled) onState(state);
          resolve();
        };
        const timeout = view.setTimeout(() => {
          // A removed script can still finish late. Do not overwrite its options or retry.
          runtime.blockedReason = 'script-timeout';
          finish('script-timeout');
        }, 15000);
        cancelActive = () => {
          // Detaching a script does not guarantee cancellation of its execution.
          // Before load completes, keep its options until the next document load.
          if (!scriptLoaded) runtime.blockedReason = 'script-cancelled';
          finish('script-cancelled');
        };

        try {
          view.atOptions = {
            key: unit.key,
            format: 'iframe',
            width: unit.width,
            height: unit.height,
            params: {},
          };
          script.type = 'text/javascript';
          script.async = false;
          script.dataset.cfasync = 'false';
          script.src = unit.scriptUrl;
          script.onload = () => {
            if (settled || cancelled) return;
            scriptLoaded = true;
            view.clearTimeout(timeout);
            onState('script-loaded');
            if (hasCreative(container)) return finish('filled');

            // A loaded provider script can legitimately return no creative.
            // Give asynchronous rendering a short grace period, then collapse it.
            fillTimeout = view.setTimeout(
              () => finish(hasCreative(container) ? 'filled' : 'no-fill'),
              8000
            );
          };
          script.onerror = () => finish('script-error');
          onState('loading');
          container.appendChild(script);
        } catch {
          finish('script-error');
        }
      })
  );

  return () => {
    cancelled = true;
    cancelActive?.();
    container.replaceChildren();
  };
}
