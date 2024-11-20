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
import { cn } from "@/lib/utils";

// Import all service components
import { WebDevServices } from "../services/web-dev";
import { AppDevServices } from "../services/app-dev";
import { IoTSolutions } from "../services/iot-solutions";
import { RoboticsSolutions } from "../services/robotics-solutions";
import { UiUxDesign } from "../services/ui-ux-design";
import { ITTraining } from "../services/it-training";

type Service = {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
};

type BentoCardProps = {
  name: string;
  className: string;
  background: React.ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  children?: React.ReactNode;
};

const features: Service[] = [
  {
    Icon: ChevronsLeftRightEllipsis,
    name: "Web Development",
    description:
      "Modern, scalable, and high-performing websites tailored to your business needs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <WebDevServices />,
  },
  {
    Icon: CodeIcon,
    name: "App Development",
    description:
      "User-centric mobile apps for native and cross-platform solutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <AppDevServices />,
  },
  {
    Icon: Bot,
    name: "Robotics Solutions",
    description:
      "Automating processes with innovative robotics for efficiency and precision.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <RoboticsSolutions />,
  },
  {
    Icon: Cpu,
    name: "IoT Solutions",
    description:
      "Connecting devices to create smarter, more efficient operations.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <IoTSolutions />,
  },
  {
    Icon: TabletSmartphone,
    name: "UI/UX Design",
    description:
      "Delivering intuitive designs that enhance user experience and engagement.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <UiUxDesign />,
  },
  {
    Icon: Presentation,
    name: "Hands-On Training",
    description:
      "Equipping learners with practical skills in Robotics, IoT, Programming, AI, and ML.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: <ITTraining />,
  },
];

export const Services = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-5">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} className={cn(feature.className)} />
        ))}
      </BentoGrid>
    </div>
  );
};
