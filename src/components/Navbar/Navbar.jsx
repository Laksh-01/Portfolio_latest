import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from "./Navbar.module.css";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={20} />,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={20} />,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={20} />,
    href: 'https://twitter.com/yourusername',
  },
  {
    name: 'Email',
    icon: <FiMail size={20} />,
    href: 'mailto:lakshsachdeva01@gmail.com',
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(`.${styles.menu}`)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={styles.navContainer}>
        <motion.a 
          href="/" 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoText}>LS</span>
          <span className={styles.logoName}>Laksh Sachdeva</span>
        </motion.a>

        <div className={styles.desktopMenu}>
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.linkText}>{link.name}</span>
                  <span className={styles.linkUnderline}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.button 
          className={styles.menuButton}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <a 
                    href={link.href}
                    className={`${styles.mobileNavLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileSocials}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileSocialLink}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {React.cloneElement(social.icon, { size: 24 })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
