import React from 'react'
import styles from '../Resume/Resume.module.css'

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' } } id="resume">
      {/* <h2>My Resume</h2> */}
      <button
        onClick={handleDownload}
        className={styles.btn}
      >
        Download Resume
      </button>
    </div>
  );
}

