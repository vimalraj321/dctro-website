"use client";

import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Hero } from "./hero";
// import { About } from "./about";
import { Services } from "./service";
import { Contact } from "./contact";

export function LandingPageComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <SiteHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        <Hero />
        {/* <About /> */}
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
