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
  vertical?: boolean;
}

export const ServiceMarquee: React.FC<ServiceMarqueeProps> = ({
  children,
  vertical = false,
}) => {
  return (
    <Marquee
      pauseOnHover
      vertical={vertical}
      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] min-w-full"
    >
      {children}
    </Marquee>
  );
};
