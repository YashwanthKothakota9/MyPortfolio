import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
