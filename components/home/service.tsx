import { CodeIcon } from "@radix-ui/react-icons";
import {
  Bot,
  ChevronsLeftRightEllipsis,
  Cpu,
  Presentation,
  TabletSmartphone,
} from "lucide-react";

import { BentoGrid } from "../ui/bento-grid";
import { BentoCard } from "../ui/bento-grid";
// import Image from "next/image";

// const TeacherIcon = ({ className }: { className: string }) => (
//   <Image src="/images/teacher.svg" alt="logo" width={25} height={25} />
// );

const features = [
  {
    Icon: ChevronsLeftRightEllipsis,
    name: "Web Development",
    description:
      "Modern, scalable, and high-performing websites tailored to your business needs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CodeIcon,
    name: "App Development",
    description:
      "User-centric mobile apps for native and cross-platform solutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Bot,
    name: "Robotics Solutions",
    description:
      "Automating processes with innovative robotics for efficiency and precision.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Cpu,
    name: "IoT Solutions",
    description:
      "Connecting devices to create smarter, more efficient operations.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: TabletSmartphone,
    name: "UI/UX Design",
    description:
      "Delivering intuitive designs that enhance user experience and engagement.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Presentation,
    name: "Hands-On Training",
    description:
      "Equipping learners with practical skills in Robotics, IoT, Programming, AI, and ML.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};
