import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/25 to-transparent sm:inset-x-8 lg:inset-x-12 xl:inset-x-16" />
      <div className="section-heading">
        <p className="eyebrow">Featured Projects</p>
        <h2>Backend-first fintech platforms with real product surfaces.</h2>
        <p>
          Recruiter-ready case studies spanning API design, ledger modeling, risk review, funding flows, dashboards,
          Dockerized services, and automated testing.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="project-card group flex h-full flex-col overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
              <img
                src={project.imageUrl}
                alt={`${project.name} dashboard screenshot`}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-teal-100 backdrop-blur">
                Product Case Study
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-sm font-semibold text-teal-200">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-400 sm:text-[0.95rem]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
                {project.tech.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary flex-1 py-2.5 text-sm">
                  View GitHub Repo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary flex-1 py-2.5 text-sm">
                  Case Study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
