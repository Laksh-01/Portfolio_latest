import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../../data/projects.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.wrapper}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className={styles.title}>My Projects</h2>
          <p className={styles.subtitle}>
            Here are some of my recent projects. Each one was built to solve a specific problem
            and demonstrates my skills in different areas of development.
          </p>
        </motion.div>

        <div className={styles.projects}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
