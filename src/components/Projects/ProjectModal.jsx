import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <ul>
          {project.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>

        <div>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a> |{" "}
          <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
        </div>

        <div className={styles.markdown}>
          {project.readmeSections?.map(({ heading, content }, index) => (
            <section key={index}>
              <h2>{heading}</h2>
              <ReactMarkdown>{content}</ReactMarkdown>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
