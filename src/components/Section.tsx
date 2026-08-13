import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

/** 通用区块容器：带标题的锚点区域 */
export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
