import React from "react";
import { FaReact, FaGraduationCap , FaBookOpen ,  FaBrain } from "react-icons/fa";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FaGraduationCap className={styles.logo}></FaGraduationCap>
            <div className={styles.aboutItemText}>
              <h3>Netaji Subhas University of Technology</h3>
              <h3 className={styles.newh}>BTech - Computer Science Engineering </h3>
              <h4 className={styles.newh}>Nov,2022  - May,2026</h4>
              <p className={styles.newh}>
                <h5>Current Gpa :  8.78  (till semester 5) </h5>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaBookOpen className={styles.logo}></FaBookOpen>
            <div className={styles.aboutItemText}>
              <h3> Indraprastha World School</h3>
              <h3 className={styles.newh}>Class XII, Senior Secondary Education - CBSE </h3>
              <h4 className={styles.newh}>2021  - 2022</h4>
              <p className={styles.newh}>
                <h5> Percentage - 97% </h5>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaBrain className={styles.logo2}></FaBrain>
            <div className={styles.aboutItemText}>
              <h3> Indraprastha World School</h3>
              <h3 className={styles.newh}>Class X,  Secondary Education - CBSE </h3>
              <h4 className={styles.newh}>2019  - 2020</h4>
              <p className={styles.newh}>
                <h5> Percentage - 95% </h5>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};