import React from "react";
import { FaDatabase , FaProjectDiagram , FaChartLine  } from "react-icons/fa";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FaDatabase className={styles.logo}></FaDatabase>
            <div className={styles.aboutItemText}>
              <h3> 🚀 Full-Stack Focused</h3>
              <p>
               I work across the full web stack — from crafting responsive UIs with React.js, HTML, CSS, and Tailwind, to building robust backend systems using Node.js, Express, and C#. My experience with MongoDB, SQL, and REST APIs helps me bring complete, scalable solutions to life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaProjectDiagram className={styles.logo}></FaProjectDiagram>
            <div className={styles.aboutItemText}>
              <h3> 🧠 Algorithm Obsessed</h3>
              <p>
               I’ve completed over 500 problems on LeetCode and mastered Data Structures & Algorithms through the AZ course, strengthening my problem-solving and coding skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaChartLine className={styles.logo2}></FaChartLine>
            <div className={styles.aboutItemText}>
              <h3>📊 Finance Enthusiast</h3>
              <p>
                Passionate about financial markets and technical analysis, I explore how data and algorithms drive smart investing. I enjoy analyzing trends, building trading logic, and connecting tech with finance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};