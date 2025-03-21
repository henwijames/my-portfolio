import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="relative rounded-2xl group overflow-hidden max-h-[800px] h-[450px] ">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full xl:h-[300px] h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2x xl:w-[230px] w-[180px] cursor-pointer group-hover:scale-105 transition-all duration-200"
            src={project.image}
            width={230}
            height={245}
            alt=""
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
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1 capitalize">{project.name}</h4>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        {project.tech?.length > 0 && (
          <div className="flex gap-2 mt-[16px] flex-wrap">
            {project.tech.map((item, index) => {
              return (
                <Badge
                  key={index}
                  className="bg-secondary hover:bg-secondary text-secondary dark:bg-primary/75 cursor-default dark:text-secondary text-black flex justify-center items-center text-xs font-medium"
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
