"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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
