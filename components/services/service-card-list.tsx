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

interface ServiceCardListProps {
  projects: ServiceProject[];
  variant?: "default" | "compact" | "modern" | "minimal" | "detailed" | "grid";
  vertical?: boolean;
}

export const ServiceCardList: React.FC<ServiceCardListProps> = ({
  projects,
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
      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
    >
      {projects.map((project, idx) => (
        <figure
          key={idx}
          className={cn(
            "relative cursor-pointer overflow-hidden border",
            "border-gray-950/[.1] dark:border-gray-50/[.1]",
            "transition-all duration-300 ease-out",
            cardStyles[variant],
            getVariantStyles()
          )}
        >
          {variant === "detailed" && (
            <div className="absolute top-0 right-0 p-2">
              <span className="text-xs font-medium text-primary">Featured</span>
            </div>
          )}

          <div
            className={cn(
              "flex flex-col gap-2",
              variant === "minimal" && "ml-2",
              variant === "modern" && "gap-4"
            )}
          >
            <figcaption
              className={cn(
                "font-medium dark:text-white",
                variant === "modern" && "text-lg",
                variant === "compact" && "text-sm",
                variant === "minimal" && "text-sm"
              )}
            >
              {project.name}
            </figcaption>

            <p
              className={cn(
                "text-gray-600 dark:text-gray-300",
                variant === "compact" && "text-xs line-clamp-2",
                variant === "modern" && "text-sm",
                variant === "minimal" && "text-xs",
                variant === "detailed" && "text-sm leading-relaxed"
              )}
            >
              {project.description}
            </p>

            <div
              className={cn(
                "flex flex-wrap gap-1",
                variant === "minimal" && "mt-auto",
                variant === "modern" && "gap-2"
              )}
            >
              {project.tech.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-medium",
                    variant === "modern" && "text-xs px-3 py-1 bg-primary/10",
                    variant === "minimal" && "border border-gray-700",
                    variant === "detailed" && "bg-primary/20 text-primary",
                    variant === "compact" && "bg-black/20 backdrop-blur-sm",
                    variant === "default" && "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </figure>
      ))}
    </Marquee>
  );
};
