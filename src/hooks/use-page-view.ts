import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from './use-page-meta';

const log: Gtag.Gtag = (...args: any[]) =>
  console.info('usePageView()', ...args);

export function usePageView({ debug = false }: { debug?: boolean } = {}) {
  const location = useLocation();
  const meta = usePageMeta(location.pathname || '/');
  // check the gtag script is defined. Otherwise, use fallback and warn about misconfig
  const hasGtag = !!window?.gtag;
  // @ts-ignore - it'll be defined with the gtag script, believe me. Check Netlify
  const hasUAID = !!window?.GA_MEASUREMENT_ID;
  // its fine, the fns dont have add'l dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fn = useCallback(
    (() => {
      if (debug) return log;
      if (!hasGtag || !hasUAID) return log;
      return window.gtag;
    })(),
    [debug, hasGtag, hasUAID]
  );
  useEffect(() => {
    // @ts-ignore
    const id: string = window?.GA_MEASUREMENT_ID;
    fn('config', id, { page_title: meta.title, page_path: meta.route });
  }, [fn, meta.title, meta.route]);
}
