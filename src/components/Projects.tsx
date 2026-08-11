type Project = {
  title: string;
  href: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "AI LMS Platform (Project Rewood)",
    href: "https://github.com/your-username/project-rewood",
    description:
      "Full-stack Learning Management System streaming interactive curricula with AI-driven adaptive learning, intelligent response generation, and automated feedback workflows.",
    stack: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "AI/ML", "Python"]
  },
  {
    title: "Interactive CRM Web Application (Larion)",
    href: "https://github.com/your-username/larion-crm",
    description:
      "Scalable CRM web application built with React and Tailwind CSS, featuring an AI chatbot system with Dialogflow/custom NLP logic and an automated Python job crawler.",
    stack: ["React", "Tailwind CSS", "Python", "Selenium", "Dialogflow"]
  },
  {
    title: "Ping Pong AI Model & Training Pipeline (Discovery Lab)",
    href: "https://github.com/your-username/discovery-lab",
    description:
      "Deep learning model trained using TensorFlow, PyTorch, and Keras achieving 95% validation accuracy, backed by a 400-page pipeline technical guide.",
    stack: ["PyTorch", "TensorFlow", "Keras", "Python"]
  },
  {
    title: "Dealership Platform Refactor (Suzuki Binh Dinh)",
    href: "https://github.com/your-username/suzuki-binh-dinh",
    description:
      "Modernized full-stack architecture with RESTful APIs, MySQL database operations, and containerized Docker CI/CD pipelines.",
    stack: ["React", "REST APIs", "MySQL", "Docker", "Git"]
  }
];

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
              Featured Projects
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Selected product work and systems thinking.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-900 dark:bg-neutral-950 dark:hover:border-neutral-800 dark:hover:bg-neutral-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-neutral-900 sm:text-2xl dark:text-neutral-100">
                  {project.title}
                </h3>
                <ArrowUpRightIcon />
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
