"use client";

import { useRef } from "react";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  const aboutRef = useRef(null);
  return (
    <main>
      <Hero aboutRef={aboutRef} />
      <div ref={aboutRef}>
        <About />
      </div>
      <Work />
      <Cta />
    </main>
  );
}
