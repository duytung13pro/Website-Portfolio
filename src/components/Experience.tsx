type ExperienceItem = {
  role: string;
  organization: string;
  range: string;
  impact: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    organization: "Project Rewood",
    range: "Aug 2025 – Apr 2026",
    impact: [
      "Architected and deployed full-stack LMS streaming interactive language-learning curricula.",
      "Integrated AI-driven response generation, automated feedback, secure auth, and dynamic delivery pipelines."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    organization: "Larion Software",
    range: "Jan 2025 – May 2025",
    impact: [
      "Built responsive CRM UI components in React and Tailwind CSS for a 6-member agile team.",
      "Enhanced AI chatbot intent recognition and engineered a Python/Selenium job scraper for HR workflows."
    ]
  },
  {
    role: "Full-Stack Software Intern",
    organization: "Suzuki Binh Dinh",
    range: "Jul 2024 – Dec 2024",
    impact: [
      "Refactored full-stack web architecture, integrated RESTful APIs with MySQL, and established Docker CI/CD pipelines."
    ]
  },
  {
    role: "AI Training Bootcamp Lead",
    organization: "Discovery Lab",
    range: "Jan 2024 – May 2024",
    impact: [
      "Led a 6-person team training TensorFlow/PyTorch vision models and compiled comprehensive pipeline documentation."
    ]
  }
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "Accessibility",
  "Performance",
  "Testing"
] as const;

export function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
          Experience & Skills
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
          Shipping disciplined front-end systems with measurable impact.
        </h2>

        <div className="mt-12 space-y-8 border-l border-neutral-200 pl-5 sm:pl-8 dark:border-neutral-900">
          {experiences.map((experience) => (
            <article key={`${experience.organization}-${experience.range}`} className="relative">
              <span
                className="absolute -left-[1.45rem] top-2 h-3 w-3 rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-black"
                aria-hidden="true"
              />
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.03em] text-neutral-900 sm:text-xl dark:text-neutral-100">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{experience.organization}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
                    {experience.range}
                  </p>
                </div>

                <ul className="mt-5 space-y-4 text-sm leading-6 text-neutral-600 sm:text-base dark:text-neutral-400">
                  {experience.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7 dark:border-neutral-800 dark:bg-neutral-950">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
            Core Skills
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
