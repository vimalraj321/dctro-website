"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NeonGradientBgProps extends React.HTMLAttributes<HTMLDivElement> {
  neonColors: {
    firstColor: string;
    secondColor: string;
  };
  borderSize?: number;
  borderRadius?: number;
}

export function NeonGradientBg({
  children,
  className,
  neonColors,
  borderSize = 2,
  borderRadius = 12,
  ...props
}: NeonGradientBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: containerRef.current?.offsetWidth || 0,
          height: containerRef.current?.offsetHeight || 0,
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--section-width": `${dimensions.width}px`,
          "--section-height": `${dimensions.height}px`,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 overflow-hidden",
        "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:content-['']",
        "before:bg-gradient-to-b before:from-white before:to-white/0 dark:before:from-black dark:before:to-black/0",
        "after:absolute after:inset-0 after:-z-20 after:h-full after:w-full after:content-['']",
        "after:bg-gradient-to-b after:from-[var(--neon-first-color)] after:to-[var(--neon-second-color)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
