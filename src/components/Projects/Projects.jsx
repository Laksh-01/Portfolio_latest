import React, { useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import projectsData from "../../data/projects.json";
import projectReadmes from '../../data/extension_project1.json';  // or an object with multiple readmes

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Find the readme JSON data corresponding to the selected project
  const selectedReadme = selectedProject ? projectReadmes[selectedProject.id] : null;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onReadMore={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={{ ...selectedProject, readmeSections: selectedReadme }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
