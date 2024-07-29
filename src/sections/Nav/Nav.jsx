import styles from "./NavStyle.module.css";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../common/ThemeContext';
import { useState } from 'react';

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="Nav" className={styles.navContainer}>
      <div className={styles.colorModeContainer}>
        <button className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          <a href="#Home" className={styles.navLink}>Home</a>
          <a href="#Education" className={styles.navLink}>Education</a>
          <a href="#Experience" className={styles.navLink}>Experience</a>
          <a href="#Projects" className={styles.navLink}>Projects</a>
          <a href="#Contacts" className={styles.navLink}>Contacts</a>
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
      </div>
    </section>
  );
}

export default Nav;
