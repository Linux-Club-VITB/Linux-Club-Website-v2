import React from "react";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Team from "@/components/Team";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Contact />
      <Team />
    </div>
  );
}
