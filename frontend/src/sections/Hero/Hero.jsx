import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg"
import twitterIconl from "../../assets/twitter-light.svg";
import twitterIcond from "../../assets/twitter-dark.svg";
import githubIconl from "../../assets/github-light.svg";
import githubIcond from "../../assets/github-dark.svg";
import linkedInIconl from "../../assets/linkedin-light.svg";
import linkedInIcond from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme==='light'?sun:moon;
  const twitterIcon = theme==='light'?twitterIconl:twitterIcond;
  const githubIcon = theme==='light'?githubIconl:githubIcond;
  const linkedInIcon = theme==='light'?linkedInIconl:linkedInIcond;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Shivankar"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.namesh}>
          Shivankar <br /> Tripathi
        </h1>
        <h2>Student at MMMUT</h2>
        <span>
          <a href="https://twitter.com/introversh" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon"></img>
          </a>
          <a href="https://github.com/introversh" target="_blank">
            <img src={githubIcon} alt="github Icon"></img>
          </a>
          <a href="https://www.linkedin.com/in/introversh" target="_blank">
            <img src={linkedInIcon} alt="linkedIn Icon"></img>
          </a>
        </span>
        <p className={styles.description}>I enjoy exploring new programming paradigms and leveraging them to solve real-world challenges.</p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
