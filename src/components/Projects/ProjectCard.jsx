import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
  onReadMore,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
  <div className={styles.topLinks}>
    <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
    <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
  </div>
  
</div>
{/* <button onClick={onReadMore} className={styles.readMoreBtn}>
    Read More
  </button> */}

    </div>
  );
};
