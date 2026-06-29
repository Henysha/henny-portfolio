export function Contact() {
  return (
    <section id="contact" className="section pb-12 sm:pb-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98)),radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.22),transparent_34%)] p-6 shadow-[0_28px_100px_rgba(20,184,166,0.16)] sm:p-10 lg:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Interested in software engineering, fintech, backend, full-stack, or platform roles.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            I&apos;m focused on building reliable systems for capital movement, risk, ledger integrity, and developer
            workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:henok.yared.dev@gmail.com" className="btn-primary">
              Email Henny
            </a>
            <a href="https://github.com/Henysha" target="_blank" rel="noreferrer" className="btn-secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/henok-yared-777x/" target="_blank" rel="noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
