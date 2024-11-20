import React from "react";
import { ServiceCardList } from "./service-card-list";

const roboticsProjects = [
  {
    name: "Warehouse Robot",
    description: "Autonomous warehouse navigation and inventory management",
    tech: ["ROS", "Computer Vision", "Python", "SLAM"],
    preview: "/projects/warehouse-robot-preview.jpg",
    link: "https://warehouse-robotics.com",
  },
  {
    name: "Medical Assistant Robot",
    description: "Healthcare support robot with patient monitoring",
    tech: ["ROS2", "TensorFlow", "C++", "Sensors"],
    preview: "/projects/medical-robot-preview.jpg",
    link: "https://medical-robotics.dev",
  },
  {
    name: "Educational Robot Kit",
    description: "DIY robot kit for STEM education",
    tech: ["Arduino", "Scratch", "3D Printing"],
    preview: "/projects/edu-robot-preview.jpg",
    link: "https://edu-robotics.com",
  },
];

export const RoboticsSolutions = () => {
  return <ServiceCardList projects={roboticsProjects} variant="grid" />;
};
