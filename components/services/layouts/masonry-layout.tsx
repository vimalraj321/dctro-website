import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";

export const MasonryLayout = ({ projects }: { projects: ServiceProject[] }) => {
  return (
    <div className="columns-2 gap-4 p-4 sm:columns-3">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={cn(
            "mb-4 break-inside-avoid-column rounded-xl p-4",
            "bg-gradient-to-br from-white/5 to-white/10",
            "backdrop-blur-sm transition-all hover:from-white/10 hover:to-white/15"
          )}
        >
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-black/20 px-2.5 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
