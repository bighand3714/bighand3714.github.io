import { profile } from '../data/profile'
import { GithubIcon, MailIcon } from './icons'

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'github':
      return <GithubIcon />
    case 'email':
      return <MailIcon />
    default:
      return <span>{icon.charAt(0).toUpperCase()}</span>
  }
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="avatar" aria-hidden="true">
          {profile.avatarImage ? (
            <img src={profile.avatarImage} alt={profile.name} />
          ) : (
            <span>{profile.avatarText}</span>
          )}
        </div>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-socials">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="social-btn"
              aria-label={social.label}
              title={social.label}
            >
              <SocialIcon icon={social.icon} />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="向下滚动">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
