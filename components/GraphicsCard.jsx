import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="relative rounded-2xl group overflow-hidden ">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full xl:h-[250px] h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2x xl:w-[230px] w-[180px]"
            src={project.image}
            width={230}
            height={245}
            alt=""
            priority
          />
          {/* buttons */}
          {/* <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center 
                            scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center 
                            scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github />
            </Link>
          </div> */}
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1 capitalize">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
