import { useLocation } from 'react-router-dom';
import pages from '../pages';

export function usePageMeta(route = null) {
  const { pathname } = useLocation();
  let path = pathname;
  if (pathname === '') path = '/';
  return pages[route || path];
}

// import { useLocation } from 'react-router-dom';
// import pages from '../pages';
// import { PageMetadata } from '../pages/types';

// export function usePageMeta(route?: string): PageMetadata | null {
//   const { pathname } = useLocation();
//   let path = pathname;
//   if (pathname === '') path = '/';
//   if (route !== undefined) {
//     return route ? pages[route] : pages['/'];
//   }
//   return (pages[route || path] as PageMetadata) || null;
// }
