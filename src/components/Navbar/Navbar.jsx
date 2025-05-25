import React, { useState } from 'react';

import styles from "./Navbar.module.css";

import {getImageUrl} from '../../utils';

import { FiMenu, FiX } from 'react-icons/fi';




export const Navbar = () => {

    const [menuOpen , setMenuOpen] = useState(false);
    return <nav 
      className = {styles.navbar}
      >


      <a href = "/"  className={styles.title}> Portfolio </a>

      <div className={styles.menu}>
          <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
</div>
      </div>


    <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} 
          ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            

        </ul>
    </div>


  </nav>
}
