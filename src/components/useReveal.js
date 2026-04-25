import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
}
