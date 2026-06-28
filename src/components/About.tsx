const highlights = ['Full-Stack Engineering', 'Fintech Infrastructure', 'Backend APIs', 'Risk & Ledger Systems'];

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">Engineering Focus / About</p>
        <h2>Practical financial systems built with backend rigor.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="card p-6 sm:p-8 lg:p-10">
          <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            I&apos;m Henok “Henny” Yared, a software engineer focused on building practical financial systems: APIs,
            ledger-based balances, risk scoring engines, funding workflows, and full-stack dashboards. My portfolio
            centers on fintech infrastructure for trusted capital networks, combining backend architecture, database
            modeling, CI-tested code, and clean user-facing interfaces.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight} className="card group p-5 transition duration-300 hover:-translate-y-1.5 hover:border-teal-300/40 hover:bg-white/[0.07]">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-teal-300/20 to-blue-400/10 ring-1 ring-teal-300/20 transition group-hover:scale-105 group-hover:ring-teal-300/40" />
              <h3 className="text-base font-semibold text-white">{highlight}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
