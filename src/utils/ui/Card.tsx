import Link from "next/link";
import { IconStart } from "@/utils/icons";
import { ProjectType } from "@/utils/types";
import IconMoniter from "../icons/IconMoniter";
import IconLink from "../icons/IconLink";

interface ProjectProps {
  index: number;
  project: ProjectType;
}

const Card = ({ index, project }: ProjectProps) => {
  return (
    <div
      key={index}
      className="w-full z-0 border rounded-md p-3 space-y-4 min-h-24"
    >
      {/* Card Header */}
      <div className="block sm:flex justify-between items-center border-b pb-2 space-x-5">
        <div className="flex w-full justify-between sm:justify-start items-center space-x-3">
          <Link
            target="_blank"
            href={project.links[0].link}
            className="flex items-center"
          >
            <IconMoniter className="w-5 h-5 mr-1" />
            {project.title}
          </Link>

          <div className="flex items-center space-x-1">
            {project.category.map((item, i) => {
              return (
                <p
                  key={i}
                  className="z-0 border rounded-md px-2 opacity-70 text-xs"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {project.domain.map((item, i) => {
            if (i > 1) return null;
            return (
              <p
                key={i}
                className="w-fit z-0 border rounded-md px-2 opacity-70 text-xs"
              >
                {item}
              </p>
            );
          })}
          {project.domain.length > 2 && (
            <p className="flex text-xs opacity-65">
              +{project.domain.length - 2}
            </p>
          )}
        </div>
      </div>

      {/* CARD BODY */}
      <div className="text-sm line-clamp-4 opacity-80 dark:font-thin tracking-wider">
        <p>{project.description}</p>
      </div>

      {/* Languages */}
      <div className="flex w-full items-center space-x-2">
        {project.languages_used.map((item, i) => {
          if (i > 2) return null;
          return (
            <div
              key={i}
              className="flex text-white w-fit items-center space-x-1 text-xs opacity-65 rounded-md px-2 py-1 md:py-0"
            >
              <IconStart className="w-4 h-4" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>

      {/* CARD FOOTER */}
      <div className="flex justify-between items-center">
        <div className="flex w-full items-center space-x-5">
          {project.links.map((item, i) => {
            if (i > 3) return null;
            return (
              <div
                key={i}
                className="flex bg-gray-500/80 text-white w-fit items-center space-x-1 text-xs opacity-65 rounded-md px-2 py-1 md:py-0"
              >
                <IconLink className="w-4 h-4" />
                <Link target="_blank" href={item.link}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-xs opacity-50">{project.year}</p>
      </div>
    </div>
  );
};

export default Card;
