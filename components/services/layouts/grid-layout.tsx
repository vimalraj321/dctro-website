import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";

export const GridLayout = ({ projects }: { projects: ServiceProject[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={cn(
            "group relative overflow-hidden rounded-lg border p-4",
            "bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10",
            "dark:border-gray-800"
          )}
        >
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium dark:bg-gray-800"
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
