import { skills } from '../data/skills'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="技能" subtitle="Skills">
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-chip">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
