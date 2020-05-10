import { useLocation } from "react-router-dom";
import pages from "../pages";

export function usePageMeta(route = null) {
  const { pathname } = useLocation();
  return pages[route || pathname];
}
