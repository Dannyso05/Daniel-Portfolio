import styles from './EducationStyle.module.css';

function Education() {
  return (
    <section id="Education" className={styles.educationSection}>
      <div className={styles.educationContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg" alt="School Logo" className={styles.schoolLogo} />
        <div className={styles.educationDetails}>
          <h2 className={styles.schoolName}>University of Waterloo</h2>
          <p className={styles.degree}>Bachelor of Statistics & Computational Mathematics</p>
          <p className={styles.duration}>2023 - 2028</p>
          <p className={styles.coursework}>Coursework: </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
