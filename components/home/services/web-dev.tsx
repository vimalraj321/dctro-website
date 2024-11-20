import React from "react";
import { ServiceCardList } from "./service-card-list";

const webDevProjects = [
  {
    name: "Caliber Fitness",
    description:
      "Unisex fitness center focusing on holistic approach to mind and body. Our inclusive",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    preview: "/projects/caliber-fitness-preview.jpg",
    link: "https://caliber-fitness.com",
  },
  {
    name: "Rehabilitation Center",
    description:
      "Comprehensive rehabilitation services for physical and mental well-being",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    preview: "/projects/rehabilitation-center-preview.jpg",
    link: "https://rehabilitation-center.com",
  },
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
];

export const WebDevServices = () => {
  return <ServiceCardList projects={webDevProjects} variant="modern" />;
};
