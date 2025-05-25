import React, { useState } from "react";
import styles from "./Achievements.module.css";
import { AchievementCard } from "./AchievementCard";
import achievementsdata from "../../data/achievements_data.json";

export const Achievements = () => {
 
  

  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.projects}>
        {achievementsdata.map((achievement) => (
          <AchievementCard
            
            achievement={achievement}
            
          />
        ))}
      </div>
    </section>
  );
};
