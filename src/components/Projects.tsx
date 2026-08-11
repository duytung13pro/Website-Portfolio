"use client";

import { useState } from "react";

type Project = {
  title: string;
  href: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "AI LMS Platform",
    href: "https://github.com/your-username/project-rewood",
    description:
      "Full-stack learning platform with AI-driven adaptive learning, interactive curricula, and automated feedback workflows.",
    stack: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "AI/ML", "Python"]
  },
  {
    title: "CRM Web App",
    href: "https://github.com/your-username/larion-crm",
    description:
      "Responsive CRM experience with chatbot support, streamlined team workflows, and automation for recurring operational tasks.",
    stack: ["React", "Tailwind CSS", "Python", "Selenium", "Dialogflow"]
  },
  {
    title: "Ping Pong AI Model",
    href: "https://github.com/your-username/discovery-lab",
    description:
      "Deep learning model and training pipeline developed for competitive game-state prediction with supporting documentation.",
    stack: ["PyTorch", "TensorFlow", "Keras", "Python"]
  },
  {
    title: "Suzuki Platform Refactor",
    href: "https://github.com/your-username/suzuki-binh-dinh",
    description:
      "Refactored dealership platform with REST APIs, database operations, and containerized delivery pipelines.",
    stack: ["React", "REST APIs", "MySQL", "Docker", "Git"]
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition-transform duration-300 hover:-translate-y-1 hover:border-neutral-300 dark:border-neutral-900 dark:bg-neutral-950 dark:hover:border-neutral-800"
    >
      <div className="border-b border-neutral-200 bg-neutral-950 p-4 dark:border-neutral-900">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" aria-hidden="true" />
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 p-4 text-neutral-300">
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
            <span>Repository preview</span>
            <span>Code window</span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-5/6 rounded-full bg-white/10" />
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <div className="h-2 w-4/6 rounded-full bg-white/10" />
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="h-2 w-2/5 rounded-full bg-white/15" />
              <div className="mt-3 h-2 w-4/5 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-2xl dark:text-neutral-100">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Featured project</p>
          </div>
          <span className="mt-1 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-500">
            ↗
          </span>
        </div>

        <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const previewProjects = projects.slice(0, 2);
  const extraProjects = projects.slice(2);

  return (
    <section id="projects" className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
              Featured Projects
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Selected product work and systems thinking.
            </h2>
          </div>

          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          >
            <span>{showAll ? "Show less" : "View all"}</span>
            <span aria-hidden="true">{showAll ? "↑" : "→"}</span>
          </button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {previewProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div
          className={`grid gap-4 overflow-hidden md:grid-cols-2 motion-reduce:transition-none ${
            showAll
              ? "mt-4 max-h-[2000px] opacity-100 transition-all duration-500 ease-out"
              : "max-h-0 opacity-0 transition-all duration-300 ease-in pointer-events-none"
          }`}
        >
          {extraProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
