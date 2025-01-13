"use client";
import React, { useEffect } from "react";
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

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 50,
    };

    const typed = new Typed(".hero-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownCV = () => {
    const resumePdfUrl = "/resume/hjr.pdf";
    window.open(resumePdfUrl, "_blank");
  };

  return (
    <div>
      <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 mb-24 flex items-center xl:items-start">
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[1000px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold text-primary tracking-[4px] hero flex flex-row xl:justify-start sm:flex justify-center items-center">
                <div className="hero-text">Front-end Developer</div>
              </div>
              <h1 className="h1 mb-4">
                Hi, I'm <span className="text-slate-500">Henry!</span>{" "}
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                4th year IT student major in Web Development and Graphic Design
                based in the Philippines.
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
              {/* Badge 1 */}
              <Badge
                containerStyles="absolute top-[5%] -left-[30rem] hover:scale-110 transition-all cursor-pointer"
                icon={<RiBriefcase4Fill />}
                endCountNum={3}
                badgeText="Years of Experience"
              />
              {/* Badge 2 */}
              <Badge
                containerStyles="absolute top-[100%] -left-[10rem] hover:scale-110 transition-all cursor-pointer"
                icon={<RiTodoFill />}
                endCountNum={6}
                badgeText="Projects Completed"
              />
              <Me
                imgSrc="/hero/hero.png"
                containerStyles="w-[450px] h-[450px] absolute -top-24 -right-2"
                sizes="(min-width: 1024px) 450px, 90vw"
              />
            </div>
          </div>
          {/* Icon */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
