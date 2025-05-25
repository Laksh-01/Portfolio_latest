import React from "react";

import styles from "./AchievementCard.module.css";


export const AchievementCard = ({
  achievement: { title, subtitle , content},
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h4>{subtitle}</h4>
      <p className={styles.description}>{content}</p>
    
    </div>
  );
};
