import { RefObject, useEffect, useState } from "react";

export const useInView = (ref: RefObject<Element>, show: boolean = false) => {
  const [isVisible, setIsVisible] = useState(show);
  useEffect(() => {
    const current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px" }
    );
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref]);
  return isVisible;
};
