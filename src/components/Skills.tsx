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
          Familiar Skills
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
          Technical stack built for modern full-stack delivery.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skillGroups.map((group) => (
            group.items.map((item) => (
              <span
                key={`${group.title}-${item}`}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-neutral-700 shadow-sm shadow-black/5 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
              >
                {item}
              </span>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}