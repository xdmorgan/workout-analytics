import { useEffect } from 'react';

const log: Gtag.Gtag = (...args: any[]) =>
  console.info('usePageView()', ...args);

export function usePageView({
  route: page_path,
  title: page_title,
  debug = false,
}: {
  route: string;
  title: string;
  debug?: boolean;
}) {
  // check the gtag script is defined. Otherwise, use fallback and warn about misconfig
  const hasGtag = !!window.gtag;
  // @ts-ignore - it'll be defined with the gtag script, believe me. Check Netlify
  const hasUAID = !!window.GA_MEASUREMENT_ID;
  // check whether debug mode and pre requisit scripts and config id is available
  const shouldReportEvents = !debug && hasGtag && hasUAID;
  useEffect(() => {
    // @ts-ignore
    const id: string = window?.GA_MEASUREMENT_ID;
    const fn = shouldReportEvents ? window.gtag : log;
    fn('config', id, { page_title, page_path });
  }, [page_path, page_title, shouldReportEvents]);
}
