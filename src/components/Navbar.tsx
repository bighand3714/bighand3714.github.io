const links = [
  { href: '#about', label: '关于我' },
  { href: '#projects', label: '项目' },
  { href: '#skills', label: '技能' },
  { href: '#contact', label: '联系' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="主导航">
        <a href="#top" className="navbar-brand">
          bighand3714
        </a>
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
