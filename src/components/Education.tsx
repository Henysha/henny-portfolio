export function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Software engineering education grounded in systems and implementation.</h2>
        <p>
          Formal training that supports backend architecture, database design, testing discipline, and full-stack
          delivery.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-200">Graduate Degree</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">M.S. Software Engineering</h3>
          <p className="mt-2 text-slate-400">University of St. Thomas · Graduated May 2026</p>
          <p className="mt-5 leading-7 text-slate-400">
            Focused on software architecture, backend systems, databases, testing, and full-stack engineering practices.
          </p>
        </article>

        <article className="card p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-200">Undergraduate Degree</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">B.S. Chemistry</h3>
          <p className="mt-2 text-slate-400">University of Minnesota</p>
          <p className="mt-5 leading-7 text-slate-400">
            Scientific training that supports analytical problem solving, systems thinking, and careful technical
            execution.
          </p>
        </article>
      </div>
    </section>
  );
}
