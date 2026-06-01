import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 88;

const scrollToHash = (hash: string) => {
  const id = hash.replace("#", "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    if (scrollToHash(hash)) return;

    const timeout = window.setTimeout(() => scrollToHash(hash), 150);
    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
