"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import Card from "@/utils/ui/Card";
import SearchBar from "../search-bar";
import { FilterOptionsTypes } from "@/utils/types";

const Projects = () => {
  const [searchQuesry, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([...projects]);
  const [checkedFilters, setCheckedFilters] = useState<FilterOptionsTypes>({
    contents: ["Dataset"],
    fields: [],
    domains: [],
  });

  const onChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const searchProjects = () => {
      const query = searchQuesry.toLowerCase();
      const results = projects.filter((project) => {
        return (
          project.title.toLowerCase().includes(query) ||
          project.field.toLowerCase().includes(query)
        );
      });

      setFilteredProjects([...results]);
    };
    searchProjects();
  }, [searchQuesry]);

  return (
    <div className="w-full space-y-5">
      {/* <div className="flex justify-between items-center">
        <p>Featured Projects</p>
        <Link
          href={"/"}
          className="text-blue-500 capitalize"
          title="See all projects"
        >
          See all featured projects
        </Link>
      </div> */}
      <SearchBar
        checkedFilters={checkedFilters}
        setCheckedFilters={setCheckedFilters}
        value={searchQuesry}
        onChange={onChangeSearchQuery}
      />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {/* PROJECT */}
        {/* {projects
          .filter((project) => project[defaults as keyof ProjectType])
          .map((project, index) => (
            <Card key={project.id} index={index} project={project} />
          ))} */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            if (index > 19) return null;
            return <Card key={project.id} index={index} project={project} />;
          })
        ) : (
          <div className="w-full py-24">
            <p className="opacity-65 text-2xl">No results found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
