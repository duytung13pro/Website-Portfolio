const profiles = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
  { label: "Netlify", href: "https://your-portfolio.netlify.app" }
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              Education
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              B.S. in Computer Science — University of Cincinnati (Expected Dec 2026)
            </p>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {year} Jay Dao. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
          {profiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {profile.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
