import React from "react";
import { FeatureLayout } from "./layouts/feature-layout";

const appDevProjects = [
  {
    name: "Food Delivery App",
    description: "Cross-platform mobile app with real-time order tracking",
    tech: ["React Native", "Firebase", "Redux", "Maps API"],
    preview: "/projects/food-delivery-preview.jpg",
    link: "https://food-delivery.app",
  },
  {
    name: "Fitness Tracker",
    description: "Health monitoring app with workout planning and analytics",
    tech: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    preview: "/projects/fitness-preview.jpg",
    link: "https://fitness-tracker.app",
  },
  {
    name: "Dating App",
    description: "Location-based dating app with AI matchmaking",
    tech: ["Swift", "Node.js", "MongoDB", "Socket.io"],
    preview: "/projects/dating-preview.jpg",
    link: "https://dating-app.dev",
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
  return <FeatureLayout projects={appDevProjects} />;
};
