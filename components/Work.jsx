"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        image: "/works/alumni.png",
        category: "PHP",
        name: "Lemery Colleges alumni system",
        description:
            "Information and Credential Request Management System for Lemery Colleges Alumni",
        link: "/",
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

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4 relative">
                        Latest Projects
                    </h2>
                    <p className="subtitle mb-8">
                        This is my projects that I built with their specific
                        language
                    </p>
                    <Link href="/projects">
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* Slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[500px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* Show only the first 4 projects */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {" "}
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
