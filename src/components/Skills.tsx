import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Technical Skills</p>
        <h2>Tools and concepts for reliable financial software.</h2>
        <p>
          Backend, frontend, data, DevOps, and fintech concepts used across the portfolio projects.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="card p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.065]"
          >
            <h3 className="text-lg font-semibold text-white">{group.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
