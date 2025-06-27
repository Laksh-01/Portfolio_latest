import React from 'react';
import { motion } from 'framer-motion';
import styles from "./Hero.module.css";
import heroImg from '../../../assets/Hero.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const Hero = () => {
  return (
    <motion.section 
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.content}>
        <motion.h1 
          className={styles.heroTitle}
          variants={itemVariants}
        >
          Hi, I'm Laksh Sachdeva
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          variants={itemVariants}
        >
          Tech enthusiast and B.Tech student at NSUT, passionate about building smart solutions.
          From cracking algorithms in competitive coding to crafting full-stack apps and exploring AI—I'm all in for innovation.
        </motion.p>
        
        <motion.a 
          href="mailto:lakshsachdeva01@gmail.com" 
          className={`${styles.contactBtn} ${styles.btn} ${styles.btnPrimary}`}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get In Touch
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ marginLeft: '8px' }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.a>
      </div>

      <motion.div 
        className={styles.heroImgContainer}
        variants={itemVariants}
      >
        <motion.img 
          src={heroImg} 
          alt="Laksh Sachdeva" 
          className={styles.heroImg}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        />
        <div className={`${styles.decoration} ${styles.decoration1}`}></div>
        <div className={`${styles.decoration} ${styles.decoration2}`}></div>
      </motion.div>
    </motion.section>
  );
};
