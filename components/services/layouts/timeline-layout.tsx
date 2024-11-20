import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";

export const TimelineLayout = ({
  projects,
}: {
  projects: ServiceProject[];
}) => {
  return (
    <div className="relative flex h-full flex-col gap-8 p-6">
      {/* Timeline line */}
      <div className="absolute left-[21px] top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-gray-800 via-gray-700 to-transparent" />

      {projects.map((project, idx) => (
        <div key={idx} className="flex gap-6">
          {/* Timeline dot */}
          <div className="relative mt-1.5 h-3 w-3">
            <div className="absolute h-full w-full rounded-full bg-gray-700" />
            <div className="absolute h-full w-full animate-ping rounded-full bg-gray-700/50" />
          </div>

          <div
            className={cn(
              "flex-1 rounded-xl border border-gray-800/50",
              "bg-gradient-to-br from-gray-900/50 to-black/50",
              "p-4 transition-all duration-300 hover:border-gray-700/50"
            )}
          >
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-gray-800/50 px-2.5 py-0.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
