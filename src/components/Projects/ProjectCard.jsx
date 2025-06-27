import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 15px 40px -10px rgba(0,0,0,0.25)",
  },
};

export const ProjectCard = ({
  project: { title, description, skills = [], demo, source, category }
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e) => {
    // Don't navigate if clicking on links or buttons inside the card
    if (e.target.closest('a, button')) return;
    
    if (demo) {
      window.open(demo, '_blank', 'noopener,noreferrer');
    } else if (source) {
      window.open(source, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          {category && (
            <span className={styles.category}>
              {category}
            </span>
          )}
          <h3 className={styles.title}>{title}</h3>
          {isHovered && (
            <motion.div 
              className={styles.externalLink}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <FiExternalLink size={16} />
            </motion.div>
          )}
        </div>
        
        <p className={styles.description}>{description}</p>
        
        {skills.length > 0 && (
          <div className={styles.skillsContainer}>
            {skills.slice(0, 5).map((skill, id) => (
              <motion.span 
                key={id} 
                className={styles.skill}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                  borderColor: 'rgba(99, 102, 241, 0.4)'
                }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
            {skills.length > 5 && (
              <span className={styles.moreSkills}>+{skills.length - 5} more</span>
            )}
          </div>
        )}

        <div className={styles.footer} onClick={e => e.stopPropagation()}>
          <div className={styles.links}>
            {source && (
              <motion.a 
                href={source} 
                className={styles.link}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View source code"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className={styles.icon} />
                <span>Source</span>
              </motion.a>
            )}
            {demo && (
              <motion.a 
                href={demo} 
                className={`${styles.link} ${styles.demoLink}`}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View live demo"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink className={styles.icon} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
