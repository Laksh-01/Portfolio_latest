import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaProjectDiagram, FaChartLine, FaCode, FaServer, FaMobile } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiDotnet } from "react-icons/si";
import styles from "./About.module.css";

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
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, level: 90 },
  { name: "React", icon: <SiReact />, level: 85 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
  { name: "MongoDB", icon: <SiMongodb />, level: 75 },
  { name: "C# / .NET", icon: <SiDotnet />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
];

const aboutCards = [
  {
    icon: <FaCode className={styles.cardIcon} />,
    title: "Full-Stack Developer",
    description:
      "I build responsive and performant web applications using modern technologies like React, Node.js, and MongoDB. I love turning ideas into reality through clean and efficient code.",
  },
  {
    icon: <FaServer className={styles.cardIcon} />,
    title: "Backend Specialist",
    description:
      "I design and implement robust backend systems with Node.js, Express, and C#. I focus on creating scalable and maintainable APIs that power amazing user experiences.",
  },
  {
    icon: <FaMobile className={styles.cardIcon} />,
    title: "UI/UX Enthusiast",
    description:
      "I create beautiful and intuitive user interfaces with a focus on accessibility and user experience. I believe good design is as important as good code.",
  },
  {
    icon: <FaChartLine className={styles.cardIcon} />,
    title: "Problem Solver",
    description:
      "With over 500 LeetCode problems solved, I've honed my problem-solving skills and algorithmic thinking to tackle complex challenges efficiently.",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.div
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className={styles.header} variants={fadeInUp}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            I'm a passionate Full-Stack Developer with expertise in building modern web applications and solving complex problems.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div className={styles.aboutText} variants={fadeInUp}>
            <h3>Who am I?</h3>
            <p>
              I'm a B.Tech student at NSUT with a passion for creating exceptional digital experiences. 
              I specialize in full-stack web development, with expertise in both frontend and backend technologies.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which led me to explore 
              programming, algorithms, and system design. I'm constantly learning and staying up-to-date with 
              the latest technologies and best practices.
            </p>
            <div className={styles.skills}>
              <h4>My Skills</h4>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <div className={styles.skillBar}>
                        <motion.div
                          className={styles.skillLevel}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.aboutCards} variants={staggerContainer}>
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className={styles.aboutCard}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              >
                <div className={styles.cardIconContainer}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};