import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { MdDevices, MdWork, MdSchool } from "react-icons/md";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaDatabase,
  FaFileAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMicrosoft,
  FaCode,
  FaServer,
  FaChartLine,
  FaLaptopCode,
  FaBolt,
  FaProjectDiagram,
  FaCloud,
  FaMicrochip
} from "react-icons/fa";
import { SiGraphql, SiMongodb, SiDotnet, SiR, SiCplusplus } from "react-icons/si";
// import { SiMicrosoft } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";

const skillIcons = {
  HTML: <FaHtml5 color="#e34c26" size={28} />,
  CSS: <FaCss3Alt color="#264de4" size={28} />,
  React: <FaReact color="#61dafb" size={28} />,
  Node: <FaNodeJs color="#3c873a" size={28} />,
  GraphQL: <SiGraphql color="#e535ab" size={28} />,
  MongoDB: <SiMongodb color="#4db33d" size={28} />,
  Figma: <FaFigma color="#a259ff" size={28} />,
  Dotnet: <SiDotnet color="#68217a" size={28} />,
  Python: <FaPython color="#3776ab" size={28} />,
  SQL: <FaDatabase color="#f29111" size={28} />,
  CSV: <FaFileAlt color="#4caf50" size={28} />,
  Arduino: <MdDevices color="#00979D" size={28} />,
  PowerBI: <AiOutlineBarChart color="#F2C811" size={28} />,
  R: <SiR color="#276DC3" size={28} />,
  'C#': <SiCplusplus color="#9B4F96" size={28} />,
  // Azure: <SiMicrosoft color="#0089D6" size={28} />,
};

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <motion.div
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Experience & Skills</h2>
          <p className={styles.subtitle}>Technologies I've worked with and my professional journey</p>
        </div>

        <div className={styles.content}>
          <motion.div className={styles.skillsSection} variants={staggerContainer}>
            <h3 className={styles.sectionTitle}>
              <MdWork className={styles.sectionIcon} />
              Technical Skills
            </h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, id) => (
                <motion.div 
                  key={id} 
                  className={styles.skillCard}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.skillIcon}>
                    {skillIcons[skill.title] || <FaCode size={28} />}
                  </div>
                  <div className={styles.skillInfo}>
                    <h4>{skill.title}</h4>
                    <div className={styles.skillLevel}>
                      <div 
                        className={styles.skillLevelFill} 
                        style={{ width: `${skill.level || 80}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.experienceSection} variants={staggerContainer}>
            <h3 className={styles.sectionTitle}>
              <MdSchool className={styles.sectionIcon} />
              Work Experience
            </h3>
            <div className={styles.timeline}>
              {history.map((item, id) => (
                <motion.div 
                  key={id} 
                  className={styles.timelineItem}
                  variants={fadeInUp}
                >
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3>{item.role}</h3>
                      <span className={styles.timelineDate}>
                        <FaCalendarAlt className={styles.dateIcon} />
                        {`${item.startDate} - ${item.endDate}`}
                      </span>
                    </div>
                    <h4 className={styles.company}>
                      {item.organisation}
                      {item.website && (
                        <a 
                          href={item.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.websiteLink}
                        >
                          <FaExternalLinkAlt size={12} />
                        </a>
                      )}
                    </h4>
                    <ul className={styles.experienceList}>
                      {item.experiences.map((exp, idx) => (
                        <li key={idx} className={styles.experienceItem}>
                          <span className={styles.bullet} />
                          {exp}
                        </li>
                      ))}
                    </ul>
                    {item.technologies && (
                      <div className={styles.techTags}>
                        {item.technologies.map((tech, techId) => (
                          <span key={techId} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
