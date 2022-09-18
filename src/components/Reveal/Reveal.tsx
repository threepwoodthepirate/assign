import { useInView } from "@/hooks/useInView";
import { PropsWithChildren, useRef } from "react";

export const Reveal: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useInView(ref);
  return (
    <div ref={ref} className={onScreen ? "animate-fadeIn" : ""}>
      {children}
    </div>
  );
};
