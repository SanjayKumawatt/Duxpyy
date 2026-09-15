
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      // Main window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      // HTML document
      document.documentElement.scrollTop = 0;

      // Body
      document.body.scrollTop = 0;

      // Some browsers / layouts
      window.scrollTo(0, 0);
    };

    // Run immediately
    scrollToTop();

    // Run again after React has painted the new page
    const frame1 = requestAnimationFrame(() => {
      scrollToTop();
    });

    // Run once more after the next paint
    const frame2 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });

    // Small delay for pages containing images / animations / dynamic content
    const timeout = setTimeout(() => {
      scrollToTop();
    }, 100);

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      clearTimeout(timeout);
    };
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
