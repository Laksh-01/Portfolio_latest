import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';


import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:lakshsachdeva01@gmail.com"><FaEnvelope className={styles.icon}></FaEnvelope>    lakshsachdeva01@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.icon}></FaLinkedin>
          <a href="https://www.linkedin.com/in/lakshsachdeva/">linkedin.com/lakshsachdeva</a>
        </li>
        <li className={styles.link}>
         <FaGithub className={styles.icon}></FaGithub>
          <a href="https://github.com/Laksh-01">github.com/Laksh-01</a>
        </li>
      </ul>
    </footer>
  );
};