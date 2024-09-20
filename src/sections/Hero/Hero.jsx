import styles from "./HeroStyles.module.css";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import CVLight from "../../assets/Resume-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CVDark from "../../assets/Resume-dark.svg";

import CV from "../../assets/Resume.pdf";
import { useTheme } from "../common/ThemeContext";

function Hero() {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const CVicon = theme === 'light' ? CVLight : CVDark;

  return (
    <div className={styles.container}>
      <section className={styles.Hero}>
        <div className={styles.colorModeContainer}>
          <div className={styles.blob}></div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.info}>
            <h1>Daniel Song</h1>
            <h3>AI/ML Enthusiast</h3>
            <span>
              <a href="https://www.linkedin.com/in/daniel-song0718/">
                <img src={linkedinIcon} alt="LinkedinIcon" />
              </a>
              <a href="https://github.com/Dannyso05">
                <img src={githubIcon} alt="GithubIcon" />
              </a>
              <a href={CV}>
                <img src={CVicon} alt="ResumeIcon" />
              </a>
            </span>
          </div>
          <p>
            Passionate student with interest in the <br />
            field of Machine Learning and Data Science.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
