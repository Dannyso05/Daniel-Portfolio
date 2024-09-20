import styles from './AboutMeStyle.module.css';
import abt from '../../assets/AboutMe.jpg'

function AboutMe() {
  return (
    <section id="AboutMe" className={styles.aboutMeSection}>
      <h1 className={styles.sectionTitle}>About me</h1>
      <div className={styles.contentContainer}>
        <img src={abt} alt="Profile" className={styles.profilePicture} />
        <div className={styles.textContent}>
          <p className={styles.aboutText}>
            Hello, I am Daniel Song. I am a second year student at University of Waterloo, I have high interest in latest Machine Learning and AI technologies. I'm looking to connect with professionals for insights and potential opportunities in this field.
          </p>
          <a className={styles.educationButton} href="https://uwaterloo.ca/">
            <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg" alt="UWaterloo" className={styles.schoolLogo} />
            <div className={styles.buttonText}>
              <p>University of Waterloo</p>
              <p>Bachelor of Statistics & Computational Mathematics</p>
              <p>2023 - 2028</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;