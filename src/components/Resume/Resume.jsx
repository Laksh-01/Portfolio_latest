import React from 'react';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';
import styles from './Resume.module.css';

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className={styles.container} id="resume">
      <button
        onClick={handleDownload}
        className={styles.downloadBtn}
        aria-label="Download Resume"
      >
        <span className={styles.btnContent}>
          <FaFileDownload className={styles.downloadIcon} />
          <span>Download Resume</span>
          <FaArrowRight className={styles.arrowIcon} />
        </span>
        <span className={styles.btnBg}></span>
      </button>
    </div>
  );
};

