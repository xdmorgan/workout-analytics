import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WARN_MISSING_SNIPPET =
  'Warning: Using fallback function because window.gtag is missing';
const WARN_MISSING_ENV_VAR =
  'Warning: Using fallback function because REACT_APP_ANALYTICS_ID env var is undefined';

const logDebug: Gtag.Gtag = (...args: any[]) =>
  console.info('usePageView()', ...args);
const logScriptFallback: Gtag.Gtag = (...args: any[]) =>
  console.warn('usePageView()', ...args, '\n' + WARN_MISSING_SNIPPET);
const logConfigFallback: Gtag.Gtag = (...args: any[]) =>
  console.warn('usePageView()', ...args, '\n' + WARN_MISSING_ENV_VAR);

export function usePageView({ debug = false }: { debug?: boolean } = {}) {
  const location = useLocation();
  // check the gtag script is defined. Otherwise, use fallback and warn about misconfig
  const hasGtag = !!window?.gtag;
  const hasUAID = !!process?.env?.REACT_APP_ANALYTICS_ID;
  // its fine, the fns dont have add'l dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fn = useCallback(
    (() => {
      if (debug) return logDebug;
      if (!hasGtag) return logScriptFallback;
      if (!hasUAID) return logConfigFallback;
      return window.gtag;
    })(),
    [debug, hasGtag, hasUAID]
  );
  useEffect(() => {
    fn('config', process.env.REACT_APP_ANALYTICS_ID as string);
  }, [fn, location]);
}
