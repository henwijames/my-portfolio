import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import truncate from "@/utils/string";

const ProjectCard = ({ project }) => {
  return (
    <Card className="relative rounded-2xl group overflow-hidden max-h-[800px] h-[350px] sm:h-[330px] flex flex-col">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[170px] flex items-center justify-center bg-black/5 dark:bg-secondary/40 overflow-hidden">
          <Image
            className="absolute bottom-0 w-auto h-auto shadow-2x cursor-pointer group-hover:scale-105 transition-all duration-200"
            src={project.image}
            width={190}
            height={285}
            alt="projects"
            priority
          />

          {/* buttons */}
          <div className="flex gap-x-4">
            {project.link && project.link !== "/" && (
              <Link
                href={project.link}
                target="_blank"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center 
                    scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon />
              </Link>
            )}

            {project.github && project.github !== "/" && (
              <Link
                href={project.github}
                target="_blank"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center 
                    scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Github />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h4 className="text-[16px] font-medium mb-1 capitalize">
            {project.name}
          </h4>
          <p className="text-muted-foreground text-sm">
            {truncate(project.description, 50)}
          </p>
        </div>
        {project.tech?.length > 0 && (
          <div className="flex gap-1 mt-4 flex-wrap w-full">
            {project.tech.map((item, index) => {
              return (
                <Badge
                  key={index}
                  className="bg-primary text-white dark:bg-primary/75 cursor-default dark:text-secondary flex justify-center items-center text-2xs font-medium"
                >
                  {item}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
