import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import heroImg from '../../../assets/Hero.png';




export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi , I am Laksh Sachdeva</h1>
        <p className={styles.description}>
            Tech enthusiast and B.Tech student at NSUT , passionate about building smart solutions.
            From cracking algorithms in competitive coding to crafting full-stack apps and exploring AI—I'm all in for innovation.
        </p>
        <a href = "mailto:lakshsachdeva01@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>


    <img src={heroImg} alt="hero" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  )
}
