import React from "react";
import { ShowcaseLayout } from "./layouts/showcase-layout";
import Marquee from "../ui/marquee";
import { ServiceCardList } from "./service-card-list";
import { ServiceMarquee } from "./service-marquee";

const webDevProjects = [
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, Stripe, and Prisma",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    preview: "/projects/ecommerce-preview.jpg",
    link: "https://example-ecommerce.com",
  },
  {
    name: "Portfolio CMS",
    description: "Headless CMS-powered portfolio with rich content management",
    tech: ["React", "Sanity.io", "Tailwind CSS"],
    preview: "/projects/portfolio-preview.jpg",
    link: "https://portfolio-cms.dev",
  },
  {
    name: "Task Management App",
    description: "Real-time collaborative task management platform",
    tech: ["Vue.js", "Firebase", "Vuex"],
    preview: "/projects/task-app-preview.jpg",
    link: "https://task-management.app",
  },
  {
    name: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: ["React", "D3.js", "Material UI"],
    preview: "/projects/dashboard-preview.jpg",
    link: "https://social-dashboard.app",
  },
  {
    name: "Booking System",
    description: "Appointment scheduling system for service providers",
    tech: ["Next.js", "MongoDB", "Redux"],
    preview: "/projects/booking-preview.jpg",
    link: "https://booking-system.app",
  },
  {
    name: "AI Content Generator",
    description: "Content generation platform powered by AI",
    tech: ["React", "OpenAI API", "Node.js"],
    preview: "/projects/ai-content-preview.jpg",
    link: "https://ai-content-gen.app",
  },
];

export const WebDevServices = () => {
  return (
    <ServiceMarquee vertical variant="grid">
      <ShowcaseLayout projects={webDevProjects} />
    </ServiceMarquee>
  );
};
