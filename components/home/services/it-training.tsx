import React from "react";
import { ServiceCardList } from "./service-card-list";

const trainingPrograms = [
  {
    name: "Full Stack Development",
    description: "Complete web development bootcamp with job placement",
    tech: ["MERN Stack", "DevOps", "System Design"],
    preview: "/projects/fullstack-training-preview.jpg",
    link: "https://fullstack-training.edu",
  },
  {
    name: "Cloud Computing",
    description: "AWS and Azure certification preparation",
    tech: ["AWS", "Azure", "Docker", "Kubernetes"],
    preview: "/projects/cloud-training-preview.jpg",
    link: "https://cloud-cert.edu",
  },
  {
    name: "Data Science",
    description: "Data analysis and machine learning bootcamp",
    tech: ["Python", "ML", "Statistics", "Big Data"],
    preview: "/projects/data-science-preview.jpg",
    link: "https://datascience-training.edu",
  },
  {
    name: "Interview Prep",
    description: "Technical interview preparation program",
    tech: ["DSA", "System Design", "Mock Interviews"],
    preview: "/projects/interview-prep-preview.jpg",
    link: "https://interview-prep.edu",
  },
];

export const ITTraining = () => {
  return <ServiceCardList projects={trainingPrograms} variant="modern" />;
};
