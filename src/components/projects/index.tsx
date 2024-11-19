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
    contents: [], // Default value as an example
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

      setFilteredProjects(results);
    };
    searchProjects();
  }, [searchQuesry]);

  useEffect(() => {
    const filterProjects = () => {
      const results = projects.filter((project) => {
        // Check if project matches the search query
        const matchesSearch =
          project.title.toLowerCase().includes(searchQuesry.toLowerCase()) ||
          project.field.toLowerCase().includes(searchQuesry.toLowerCase());

        // Check if project matches contents filter
        const matchesContents = checkedFilters.contents.length
          ? checkedFilters.contents.some((content) =>
              project.category.some((projectContent) =>
                projectContent.toLowerCase().includes(content.toLowerCase())
              )
            )
          : true;

        // Check if project matches fields filter
        const matchesFields = checkedFilters.fields.length
          ? checkedFilters.fields.some((field) =>
              project.field.toLowerCase().includes(field.toLowerCase())
            )
          : true;

        // Check if project matches domains filter
        const matchesDomains = checkedFilters.domains.length
          ? checkedFilters.domains.some((domain) =>
              project.domain.some((projectDomain) =>
                projectDomain.toLowerCase().includes(domain.toLowerCase())
              )
            )
          : true;

        return (
          matchesSearch && matchesContents && matchesFields && matchesDomains
        );
      });

      setFilteredProjects(results);
    };

    filterProjects();
  }, [checkedFilters, searchQuesry]); // Trigger when checkedFilters or searchQuery changes

  return (
    <div className="w-full space-y-5">
      <SearchBar
        checkedFilters={checkedFilters}
        setCheckedFilters={setCheckedFilters}
        value={searchQuesry}
        onChange={onChangeSearchQuery}
      />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            if (index > 19) return null; // Limit to first 20 projects
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
