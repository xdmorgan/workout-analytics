import { useLocation } from 'react-router-dom';
import pages from '../pages';

export function usePageMeta(route = null) {
  const { pathname } = useLocation();
  let path = pathname;
  if (pathname === '') path = '/';
  return pages[route || path];
}
