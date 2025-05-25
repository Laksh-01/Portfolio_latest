import React from "react";
import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { MdDevices } from "react-icons/md";


// React Icons (add more as needed)
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaDatabase,
  FaFileAlt,
} from "react-icons/fa";
import { SiGraphql, SiMongodb  , SiDotnet , SiR  } from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";

const skillIcons = {
  HTML: <FaHtml5 color="#e34c26" size={40} />,
  CSS: <FaCss3Alt color="#264de4" size={40} />,
  React: <FaReact color="#61dafb" size={40} />,
  Node: <FaNodeJs color="#3c873a" size={40} />,
  GraphQL: <SiGraphql color="#e535ab" size={40} />,
  MongoDB: <SiMongodb color="#4db33d" size={40} />,
  Figma: <FaFigma color="#a259ff" size={40} />,
  Dotnet :<SiDotnet color="#68217a" size={40} />,
  Python: <FaPython color="#3776ab" size={40} />,
  SQL: <FaDatabase color="#f29111" size={40} />, 
  CSV: <FaFileAlt color="#4caf50" size={40} />,
  Arduino: <MdDevices color="#00979D" size={40} />,
  PowerBI: <AiOutlineBarChart color="#F2C811" size={40} />, // Power BI’s yellow color
  R: <SiR color="#276DC3" size={40} />,
  
};


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {skillIcons[skill.title]}
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
            
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
