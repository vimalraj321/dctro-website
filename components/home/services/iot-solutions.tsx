import React from "react";
import { ServiceCardList } from "./service-card-list";

const iotProjects = [
  {
    name: "Smart Home System",
    description: "IoT-based home automation with voice control",
    tech: ["Raspberry Pi", "MQTT", "Node.js", "React"],
    preview: "/projects/smart-home-preview.jpg",
    link: "https://smart-home.io",
  },
  {
    name: "Industrial Monitoring",
    description: "Real-time industrial sensor monitoring system",
    tech: ["Arduino", "LoRaWAN", "Python", "Grafana"],
    preview: "/projects/industrial-preview.jpg",
    link: "https://industrial-iot.com",
  },
  {
    name: "Agricultural IoT",
    description: "Smart farming solution with automated irrigation",
    tech: ["ESP32", "AWS IoT", "Machine Learning"],
    preview: "/projects/agri-iot-preview.jpg",
    link: "https://agri-iot.solutions",
  },
];

export const IoTSolutions = () => {
  return <ServiceCardList projects={iotProjects} variant="modern" />;
};
