import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from "./Contact.module.css";

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

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      id="contact" 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      <div className={styles.wrapper}>
        <motion.div className={styles.text} variants={fadeInUp}>
          <h2>Get In Touch</h2>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
        </motion.div>

        <motion.ul className={styles.links}>
          <motion.li 
            className={styles.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <a href="mailto:lakshsachdeva01@gmail.com">
              <FaEnvelope className={styles.icon} />
              Email Me
            </a>
          </motion.li>
          <motion.li 
            className={styles.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <a href="https://www.linkedin.com/in/lakshsachdeva/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
              LinkedIn
            </a>
          </motion.li>
          <motion.li 
            className={styles.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <a href="https://github.com/Laksh-01" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
              GitHub
            </a>
          </motion.li>
        </motion.ul>

        <motion.div 
          className={styles.copyright}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &copy; {currentYear} Laksh Sachdeva. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};