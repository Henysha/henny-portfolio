export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="site-container flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Henok Yared.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:henokyrd@gmail.com" className="footer-link">
            Email
          </a>
          <a href="https://github.com/Henysha" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/henok-yared" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
