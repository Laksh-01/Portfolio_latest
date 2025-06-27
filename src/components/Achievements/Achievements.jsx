import React from "react";
import { motion } from "framer-motion";
import styles from "./Achievements.module.css";
import { AchievementCard } from "./AchievementCard";
import achievementsData from "../../data/achievements_data.json";

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

export const Achievements = () => {

  return (
    <section className={styles.container} id="achievements">
      <div className={styles.wrapper}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className={styles.title}>My Achievements</h2>
          <p className={styles.subtitle}>
            Recognitions and accomplishments that highlight my journey and expertise in technology and development.
          </p>
        </motion.div>

        <div className={styles.achievementsGrid}>
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={achievement.id || index}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
