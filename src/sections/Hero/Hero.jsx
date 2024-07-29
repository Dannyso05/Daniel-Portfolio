import styles from "./HeroStyles.module.css";
import githubLight from "../../assets/github-light.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import CVLight from "../../assets/Resume-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CVDark from "../../assets/Resume-dark.svg"

import CV from "../../assets/Resume.pdf"
import { useTheme } from '../common/ThemeContext'

function Hero() {
  var heroimage="https://media.licdn.com/dms/image/D5603AQHNBrcGY4EF_Q/profile-displayphoto-shrink_400_400/0/1703795023034?e=1727308800&v=beta&t=zTXW0Y-ZQn1wVnglGmbWZwhHVrQt2NuO1N54jACTWkE";
  const {theme} = useTheme();
  console.log(theme)
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const CVicon = theme === 'light' ? CVLight : CVDark;

  return (
    <div className={styles.container}>
        <nav id="Hero">    
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroimage} 
                    alt="Profile Pic"
                />
            </div>
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
                <p>
                    Passionate Student with interest in the field of Machine Learning and Data Science. 
                </p>
            </div>
        </nav>
    </div>  
  )
}

export default Hero