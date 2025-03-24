"use client";
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { ClipLoader } from "react-spinners";
import gsap from "gsap";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [categories, setCategories] = useState(["all projects"]);
  const [category, setCategory] = useState("all projects");
  const [isLoading, setIsLoading] = useState(true);
  const tabsRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects/");

        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }

        const data = await response.json();
        setProjectData(data);

        // Get unique categories
        const uniqueCategories = [
          "all projects",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!isLoading && tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [isLoading]);

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        {isLoading ? (
          <div className="pt-12 flex justify-center items-center">
            <ClipLoader color={"text-black dark:text-white"} size={50} />
          </div>
        ) : (
          <div ref={tabsRef}>
            <Tabs defaultValue={category} className="mb-24 xl:mb-48">
              <TabsList
                className="w-full grid gap-2 h-full md:grid-cols-4 lg:max-w-[740px]
                    mb-12 mx-auto md:border"
              >
                {categories.map((category, index) => {
                  return (
                    <TabsTrigger
                      onClick={() => setCategory(category)}
                      value={category}
                      key={index}
                      className="uppercase w-[162px] md:w-auto text-sm"
                    >
                      {category}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {/* Tabscontent */}
              <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => {
                  return (
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project} />
                    </TabsContent>
                  );
                })}
              </div>
            </Tabs>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
