import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillsCard from '../../common/SkillsCard'
import { useTheme } from "../../common/ThemeContext";

  
function Skills() {
   const {theme } = useTheme();
   const checkMarkIcon = theme==='light'?checkMarkIconLight:checkMarkIconDark;
  return <section id='skills' className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
       <SkillsCard src={checkMarkIcon} skillname="C++"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="Python"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="JavaScript"></SkillsCard>
    </div>
    <hr/>
    <div className={styles.skillList}>
    <SkillsCard src={checkMarkIcon} skillname="Git"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="GitHub"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="Bootstrap"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="Photoshop"></SkillsCard>
    </div>
    <hr/>
    <div className={styles.skillList}>
    <SkillsCard src={checkMarkIcon} skillname="Node"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="React"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="STL"></SkillsCard>
    </div>
    <hr/>
    <div className={styles.skillList}>
       <SkillsCard src={checkMarkIcon} skillname="Leadership"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="Reasoning"></SkillsCard>
       <SkillsCard src={checkMarkIcon} skillname="Analytical Thinking"></SkillsCard>
    </div>
    </section>
}
export default Skills
