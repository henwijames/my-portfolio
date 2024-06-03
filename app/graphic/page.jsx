"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import GraphicsCard from "@/components/GraphicsCard";

const projectData = [
  {
    image: "/graphics/bag.png",
    category: "PHP",
    name: "Bag Mockup",
    description:
      "Information and Credential Request Management System for Lemery Colleges Alumni",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/shirt.png",
    category: "PHP",
    name: "HENWI DOES TECH T-Shirt Website",
    description:
      "Point of Sale System for Ella's Pizza to manage their sales and inventory",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/hoodie.png",
    category: "PHP",
    name: "DON Patata Ordering System",
    description:
      "Ordering System for DON Patata to manage their orders and inventory",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/mug.png",
    category: "Javascript",
    name: "Utopia Island Resort Booking System",
    description:
      "Booking System for Utopia Island Resort to manage their bookings and reservations",
    link: "/",
    github: "/",
  },
];

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Graphics = () => {
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
      <div className="container mx-auto ">
        <h1 className=" h1 mb-8 xl:mb-16">As a Graphic Designer,</h1>

        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* Tabscontent */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <GraphicsCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Graphics;
