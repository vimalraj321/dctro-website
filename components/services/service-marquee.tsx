import React from "react";
import Marquee from "../ui/marquee";
import { cn } from "@/lib/utils";

export interface ServiceProject {
  name: string;
  description: string;
  tech: string[];
  preview: string;
  link: string;
}

interface ServiceMarqueeProps {
  children: React.ReactNode;
  variant?: "default" | "compact" | "modern" | "minimal" | "detailed" | "grid";
  vertical?: boolean;
}

export const ServiceMarquee: React.FC<ServiceMarqueeProps> = ({
  children,
  variant = "default",
  vertical = false,
}) => {
  const cardStyles = {
    default: "w-64 p-4 rounded-xl",
    compact: "w-48 p-3 rounded-lg",
    modern: "w-72 p-6 rounded-2xl backdrop-blur-sm",
    minimal: "w-56 p-4 rounded-md",
    detailed: "w-80 p-5 rounded-xl",
    grid: "w-64 p-4 rounded-none border-r border-b",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return "hover:scale-105 bg-gradient-to-br from-gray-900/50 to-gray-800/50";
      case "modern":
        return "hover:translate-y-[-4px] bg-white/5 backdrop-blur-lg";
      case "minimal":
        return "hover:bg-gray-800/50 border-l-4 border-l-primary";
      case "detailed":
        return "hover:ring-2 ring-primary/50 bg-black/40";
      case "grid":
        return "hover:bg-gray-800/30 transition-colors";
      default:
        return "transform-gpu blur-[1px] hover:blur-none bg-gray-950/[.01] hover:bg-gray-950/[.05]";
    }
  };

  return (
    <Marquee
      pauseOnHover
      vertical={vertical}
      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
    >
      {children}
    </Marquee>
  );
};
