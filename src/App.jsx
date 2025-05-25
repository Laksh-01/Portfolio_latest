import styles from './App.module.css';
import { About } from './components/About/About';
import {Achievements} from './components/Achievements/Achievements';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import {Education} from './components/Education/Education';
import {Resume} from './components/Resume/Resume';

function App() {
  return <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Education></Education>
    <Achievements></Achievements>
    <Resume></Resume>
    <Contact></Contact>
    
  
  </div>
}

export default App
