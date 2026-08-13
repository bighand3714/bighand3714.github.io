import { profile } from '../data/profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="关于我" subtitle="About me">
      <div className="about-content">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
