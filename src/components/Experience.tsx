type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  range: string;
  impact: string[];
  stack: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    organization: "Project Rewood",
    location: "Cincinnati, OH",
    range: "Aug 2025 – Apr 2026",
    impact: [
      "Architected and deployed full-stack LMS streaming interactive language-learning curricula.",
      "Integrated AI-driven response generation, automated feedback, secure auth, and dynamic delivery pipelines."
    ],
    stack: ["Next.js", "TypeScript", "Docker", "PostgreSQL"]
  },
  {
    role: "Full-Stack Developer Intern",
    organization: "Larion Software",
    location: "Cincinnati, OH",
    range: "Jan 2025 – May 2025",
    impact: [
      "Built responsive CRM UI components in React and Tailwind CSS for a 6-member agile team.",
      "Enhanced AI chatbot intent recognition and engineered a Python/Selenium job scraper for HR workflows."
    ],
    stack: ["React", "Tailwind CSS", "Python", "Selenium"]
  },
  {
    role: "Full-Stack Software Intern",
    organization: "Suzuki Binh Dinh",
    location: "Binh Dinh, Vietnam",
    range: "Jul 2024 – Dec 2024",
    impact: [
      "Refactored full-stack web architecture, integrated RESTful APIs with MySQL, and established Docker CI/CD pipelines."
    ],
    stack: ["React", "REST APIs", "MySQL", "Docker"]
  },
  {
    role: "AI Training Bootcamp Lead",
    organization: "Discovery Lab",
    location: "Cincinnati, OH",
    range: "Jan 2024 – May 2024",
    impact: [
      "Led a 6-person team training TensorFlow/PyTorch vision models and compiled comprehensive pipeline documentation."
    ],
    stack: ["TensorFlow", "PyTorch", "Keras", "Python"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
            Shipping disciplined systems with measurable impact.
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 md:block dark:bg-neutral-800" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((experience, index) => {
              const isOdd = index % 2 === 0;

              return (
                <article key={`${experience.organization}-${experience.range}`} className="relative md:grid md:grid-cols-2 md:gap-x-16">
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-black md:block"
                  />
                  <div className={isOdd ? "md:pr-8" : "md:order-2 md:pl-8"}>
                    <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7 dark:border-neutral-800 dark:bg-neutral-950">
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-2xl dark:text-neutral-100">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">{experience.organization}</p>

                      <ul className="mt-5 space-y-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                        {experience.impact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={isOdd ? "mt-4 md:mt-0 md:pl-8" : "mt-4 md:order-1 md:mt-0 md:pr-8"}>
                    <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 dark:border-neutral-800 dark:bg-neutral-950">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
                        Date Range &amp; Location
                      </p>
                      <p className="mt-4 text-lg font-medium tracking-[-0.03em] text-neutral-900 dark:text-neutral-100">
                        {experience.range}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
