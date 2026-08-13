import { profile } from '../data/profile'
import Section from './Section'
import { GithubIcon, MailIcon } from './icons'

export default function Contact() {
  return (
    <Section id="contact" title="联系我" subtitle="Contact">
      <div className="contact-links">
        <a href={`mailto:${profile.email}`} className="contact-card">
          <MailIcon size={24} />
          <span className="contact-label">邮箱</span>
          <span className="contact-value">{profile.email}</span>
        </a>
        <a
          href="https://github.com/bighand3714"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <GithubIcon size={24} />
          <span className="contact-label">GitHub</span>
          <span className="contact-value">@bighand3714</span>
        </a>
      </div>
    </Section>
  )
}
