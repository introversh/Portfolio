import styles from './ProjectsStyles.module.css'
import weatheriaimage from '../../assets/weatheriaimage.png';
import ProjectCard from '../../common/ProjectCard';
import todolistimage from '../../assets/todolistimage.png'
import portfolioimage from '../../assets/portfolioimage.png'
import mehnat from '../../assets/fitlift.png'

function Projects() {
  return <section id="projects" className={styles.container}>
<h1 className="sectionTitle">Projects</h1>
<div className={styles.projectContainer}>
    <ProjectCard src={weatheriaimage} link='https://github.com/introversh/weatheria' h3='Weatheria' desc='Weather App'/>
    <ProjectCard src={todolistimage} link='#' h3='Workbook' desc='To-Do-List'/>
    <ProjectCard src={portfolioimage} link='#' h3='Portfolio' desc='My Portfolio Website'/>
</div>
  </section>
}

export default Projects
