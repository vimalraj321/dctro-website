import React from "react";
import { ServiceCardList } from "./service-card-list";

const uiUxProjects = [
  {
    name: "Banking App Redesign",
    description: "Modern banking app UI with focus on accessibility",
    tech: ["Figma", "Protopie", "Design System"],
    preview: "/projects/banking-ui-preview.jpg",
    link: "https://banking-redesign.design",
  },
  {
    name: "E-learning Platform",
    description: "User-centered design for online education",
    tech: ["Adobe XD", "User Research", "Wireframing"],
    preview: "/projects/elearning-ui-preview.jpg",
    link: "https://elearning-ux.design",
  },
  {
    name: "Healthcare Portal",
    description: "Patient-focused healthcare management interface",
    tech: ["Sketch", "User Testing", "Information Architecture"],
    preview: "/projects/healthcare-ui-preview.jpg",
    link: "https://healthcare-ux.design",
  },
];

export const UiUxDesign = () => {
  return <ServiceCardList projects={uiUxProjects} variant="compact" />;
};
