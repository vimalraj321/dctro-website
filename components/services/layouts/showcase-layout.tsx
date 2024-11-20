import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const ShowcaseLayout = ({
  projects,
}: {
  projects: ServiceProject[];
}) => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 p-4">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={cn(
            "group relative overflow-hidden rounded-xl w-full",
            "border",
            "transition-all duration-300",
            "backdrop-blur-sm"
          )}
        >
          <div className="relative p-6">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-gray-400">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs",
                    "bg-white/5",
                    "text-gray-300",
                    "border border-white/10"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white">
              <span>View Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
