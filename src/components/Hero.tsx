const highlights = [
  "React",
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "Python",
  "Docker",
  "PostgreSQL"
] as const;

export function Hero() {
  return (
    <section id="top" className="border-b border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span>Available for full-stack &amp; software engineering roles</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
              Jay Dao · Full-Stack Software Developer
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-100">
              Building full-stack applications &amp; scalable web systems with precision.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
              Software Developer with hands-on experience across full-stack web architectures,
              AI integrations, containerized deployments, and automated data pipelines.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black"
              >
                View Projects
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-950"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              Focus Areas
            </p>
            <ul className="mt-4 space-y-4 text-sm text-neutral-900 dark:text-neutral-100">
              {highlights.map((item) => (
                <li key={item} className="flex items-center justify-between border-b border-neutral-200 pb-3 last:border-b-0 last:pb-0 dark:border-neutral-800">
                  <span>{item}</span>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">01</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
