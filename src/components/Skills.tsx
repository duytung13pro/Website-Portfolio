const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "HTML/CSS"]
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vite", "Spring Boot", "Flask", "Tailwind CSS"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Databricks"]
  },
  {
    title: "Tools & DevOps",
    items: ["Docker", "Git", "Linux", "Neovim"]
  }
] as const;

export function Skills() {
  return (
    <section id="skills" className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
          Technical Skills
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
          Technical stack built for modern full-stack delivery.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-900 dark:bg-neutral-950">
              <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between border-b border-neutral-200 pb-3 last:border-b-0 last:pb-0 dark:border-neutral-800">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}