"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//Components
import Badge from "./Badge";
import Socials from "./Socials";
import Me from "./Me";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ aboutRef }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Wordpress Developer", "PHP Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 50,
    };

    const typed = new Typed(".hero-text", options);

    gsap.set(heroRef.current, { opacity: 0, y: 50 });
    gsap.set(textRef.current, { opacity: 0 });

    gsap.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownCV = () => {
    const resumePdfUrl = "/resume/Henry_James_Ribano.pdf";
    window.open(resumePdfUrl, "_blank");
  };

  const scrollDown = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        ref={heroRef}
        className="py-12 xl:py-24 h-[84vh] xl:pt-28 mb-24 flex items-center xl:items-start"
      >
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[1000px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div
                ref={textRef}
                className="text-sm uppercase font-semibold text-primary tracking-[4px] hero flex flex-row xl:justify-start sm:flex justify-center items-center"
              >
                <div className="hero-text"></div>
              </div>
              <h1 className="h1 mb-4">
                Hi, I'm <span className="text-slate-500">Henry!</span>{" "}
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                I build thoughtful, high-quality solutions that combine
                technical expertise with creative problem-solving. This
                portfolio showcases projects that reflect my skills, attention
                to detail, and commitment to excellence.
              </p>
              {/* Buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="gap-x-2">
                    Contact Me <Send size={18} />{" "}
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  className="gap-x-2"
                  onClick={handleDownCV}
                >
                  Download CV <Download size={18} />
                </Button>
              </div>
              {/*Socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[25px] hover:text-slate-400 transition-all shadow-lg rounded-full"
              />
            </div>
            {/* Image */}
            <div className="hidden xl:flex relative">
              <Me
                imgSrc="/hero/me.jpg"
                containerStyles="w-[450px] h-[450px] rounded-full "
                sizes="(min-width: 1024px) 450px, 90vw"
              />
            </div>
          </div>
          {/* Icon */}
          <div
            className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce cursor-pointer"
            onClick={scrollDown}
          >
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
