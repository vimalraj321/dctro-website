import { ServiceProject } from "../service-card-list";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CarouselLayout = ({
  projects,
}: {
  projects: ServiceProject[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, idx) => (
          <div key={idx} className="min-w-full p-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-gray-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 backdrop-blur-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() =>
          setActiveIndex((i) => Math.min(projects.length - 1, i + 1))
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 backdrop-blur-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
