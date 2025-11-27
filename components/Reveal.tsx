// components/Reveal.tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
