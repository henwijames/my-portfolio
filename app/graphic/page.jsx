"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import GraphicsCard from "@/components/GraphicsCard";

const projectData = [
  {
    image: "/graphics/techno.png",
    category: "Posters",
    name: "Technolympics 2024",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/Final.png",
    category: "Posters",
    name: "MLBB Tournament Season 6",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/photography.png",
    category: "Posters",
    name: "Mobile Photography Competition",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/teachers.png",
    category: "Posters",
    name: "Teachers Day 2024",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/programming.png",
    category: "Posters",
    name: "My Logo",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/logoto.png",
    category: "Activities",
    name: "My Logo",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/bag.png",
    category: "Activities",
    name: "Bag Mockup",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/shirt.png",
    category: "Activities",
    name: "HENWI DOES TECH T-Shirt Website",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/hoodie.png",
    category: "Activities",
    name: "DON Patata Ordering System",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/mug.png",
    category: "Activities",
    name: "Utopia Island Resort Booking System",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/My_Cartoon.png",
    category: "Activities",
    name: "Graphic Design Cartoon",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/me.png",
    category: "Activities",
    name: "My Poster",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/dish.png",
    category: "Activities",
    name: "Anum Dishwashing Liquid",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/graphics.jpg",
    category: "Activities",
    name: "Graphic Design Activity",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/cheiron.jpg",
    category: "Activities",
    name: "Cumlaude Banner",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/text.png",
    category: "Activities",
    name: "MDCN Typography",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/hemtag.png",
    category: "Activities",
    name: "MDCN Hemtag",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/white.png",
    category: "Activities",
    name: "MDCN Clothing White",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/black.png",
    category: "Activities",
    name: "MDCN Clothing Black",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
  {
    image: "/graphics/1.png",
    category: "Posters",
    name: "Henry 21th Birthday Invitation",
    description: "<henwi /> does tech",
    link: "/",
    github: "/",
  },
];

//remove category duplicates
const uniqueCategories = [
  "all graphics",
  ...new Set(projectData.map((item) => item.category)),
];

const Graphics = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all graphics");

  const filteredProjects = projectData.filter((project) => {
    //if category is all projects, return all projects else return projects with the selected category
    return category === "all graphics"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto ">
        <h1 className=" h1 mb-8 xl:mb-16">As a Graphic Designer,</h1>

        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full h-full flex justify-evenly lg:max-w-[400px]
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
