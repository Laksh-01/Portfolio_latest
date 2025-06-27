import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import styles from "./AchievementCard.module.css";

const iconMap = {
  trophy: <FaTrophy className={styles.icon} />,
  award: <FaAward className={styles.icon} />,
  medal: <FaMedal className={styles.icon} />,
};

export const AchievementCard = ({
  achievement: { title, subtitle, content, icon = "trophy" },
}) => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.iconContainer}>
        {iconMap[icon] || iconMap.trophy}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{content}</p>
      </div>
    </motion.div>
  );
};
