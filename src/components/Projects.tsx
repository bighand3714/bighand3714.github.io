import { projects } from '../data/projects'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="项目" subtitle="Projects">
      {projects.length === 0 ? (
        <div className="projects-empty">
          <p className="projects-empty-title">项目列表还是空的 ✨</p>
          <p className="projects-empty-hint">
            编辑 <code>src/data/projects.ts</code> 添加你的第一个项目，
            页面会自动渲染。
          </p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {project.image && (
                <div className="project-cover">
                  <img src={project.image} alt={`${project.title} 封面`} />
                </div>
              )}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        源码 ↗
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        演示 ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
