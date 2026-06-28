export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_12%,rgba(20,184,166,0.26),transparent_31%),radial-gradient(circle_at_86%_8%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0)_0%,#020617_96%)]" />
      <div className="absolute left-1/2 top-8 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl sm:h-[34rem] sm:w-[34rem]" />

      <div className="site-container grid items-center gap-10 sm:gap-12 lg:min-h-[620px] lg:grid-cols-[minmax(0,1.12fr)_minmax(390px,0.88fr)] lg:gap-16 xl:min-h-[660px] xl:grid-cols-[minmax(0,1.18fr)_minmax(430px,0.82fr)] xl:gap-20">
        <div className="animate-rise max-w-5xl">
          <p className="eyebrow">Minneapolis, MN · Fintech Infrastructure</p>
          <h1 className="mt-5 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-white sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl">
            Henny Yared
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-medium leading-8 text-slate-100 sm:mt-7 sm:text-2xl sm:leading-9">
            Software Engineer building fintech infrastructure, ledger systems, risk engines, and community capital
            platforms.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I build full-stack systems that model trusted capital flows: APIs, ledgers, risk scoring, funding workflows,
            and developer-facing financial infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="https://github.com/Henysha"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              Resume
            </a>
          </div>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3">
            {['API platforms', 'PostgreSQL ledgers', 'CI-tested workflows'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 shadow-lg shadow-slate-950/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-rise w-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_28px_100px_rgba(20,184,166,0.18)] backdrop-blur sm:p-5 lg:translate-y-2 xl:justify-self-end">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-5 sm:p-7">
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-slate-400">Infrastructure Focus</p>
                <p className="mt-1 text-xl font-semibold tracking-tight text-white">Trusted Capital Systems</p>
              </div>
              <span className="rounded-full border border-teal-300/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-100">
                API-first
              </span>
            </div>

            <div className="space-y-4">
              {['Ledger-derived balances', 'Deterministic risk decisions', 'Idempotent funding workflows', 'Developer-ready APIs'].map(
                (item) => (
                  <div key={item} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-teal-300/30 hover:bg-white/[0.06]">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_20px_rgba(94,234,212,0.8)]" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-teal-300/10 to-blue-400/5 p-4 sm:mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">Design priority</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Reliable APIs, explicit money movement, testable risk decisions, and dashboards that make financial
                state explainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
