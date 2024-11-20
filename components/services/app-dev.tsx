import React from "react";
import { ServiceMarquee } from "./service-marquee";
import { ShowcaseLayout } from "./layouts/showcase-layout";
import { ServiceCardList } from "./service-card-list";

const appDevProjects = [
  {
    name: "Food Delivery App",
    description: "Cross-platform mobile app with real-time order tracking",
    tech: ["React Native", "Firebase", "Redux", "Maps API"],
    preview: "/projects/food-delivery-preview.jpg",
    link: "https://food-delivery.app",
  },
  {
    name: "Learning Platform",
    description: "Mobile learning app with video courses and quizzes",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL"],
    preview: "/projects/learning-preview.jpg",
    link: "https://learning-platform.app",
  },
];

export const AppDevServices = () => {
  return <ServiceCardList projects={appDevProjects} variant="modern" />;
};
