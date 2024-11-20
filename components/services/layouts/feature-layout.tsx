import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export const FeatureLayout = ({ projects }: { projects: ServiceProject[] }) => {
  return (
    <div className="grid h-full grid-cols-1 gap-6 p-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={cn(
            "group relative overflow-hidden rounded-2xl",
            "border border-gray-800 bg-black/20",
            "transition-all duration-500 hover:bg-black/40"
          )}
        >
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                className="rounded-full bg-gray-800/50 p-2 transition-transform hover:scale-110"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-medium",
                    "bg-gray-900/50 text-gray-300",
                    "ring-1 ring-gray-700/50"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:ring-2 group-hover:ring-gray-700/50" />
        </div>
      ))}
    </div>
  );
};
