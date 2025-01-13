"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/works/capstone.png",
    category: "PHP",
    name: "Capstone Project",
    description:
      "Apartment Rental System using SMS and Email Notification with GCash and Maya QR-Code",
    link: "/",
    github: "https://github.com/henwijames/poblacion_capstone",
  },
  {
    image: "/works/alumni.png",
    category: "PHP",
    name: "Lemery Colleges alumni system",
    description: "Information and Credential Request Management System",
    link: "https://alumni.lemerycolleges.edu.ph",
    github: "/",
  },
  {
    image: "/works/ellas.png",
    category: "PHP",
    name: "Ella's Pizza Point of Sale System",
    description:
      "Point of Sale System for Ella's Pizza to manage their sales and inventory",
    link: "/",
    github: "/",
  },
  {
    image: "/works/donpatata.png",
    category: "PHP",
    name: "DON Patata Ordering System",
    description:
      "Ordering System for DON Patata to manage their orders and inventory",
    link: "/",
    github: "/",
  },
  {
    image: "/works/utopia.png",
    category: "Javascript",
    name: "Utopia Island Resort Booking System",
    description:
      "Booking System for Utopia Island Resort to manage their bookings and reservations",
    link: "/",
    github: "/",
  },
  {
    image: "/works/lemsehi.png",
    category: "HTML and CSS",
    name: "Lemery Senior High School Website",
    description:
      "Website for Lemery Senior High School to showcase their school and programs",
    link: "/",
    github: "/",
  },
];

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //if category is all projects, return all projects else return projects with the selected category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
                    mb-12 mx-auto md:border"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
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
    </section>
  );
};

export default Projects;
