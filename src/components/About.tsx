export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-neutral-200 bg-neutral-50 dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">About</p>
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-neutral-900 sm:text-3xl dark:text-neutral-100">
              A little more context.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
            <p>
              I am drawn to software that solves a concrete problem and still feels calm to use. Across internships,
              product work, and personal projects, I have enjoyed the mix of implementation detail, product thinking,
              and small design choices that make tools feel dependable.
            </p>
            <p>
              Outside of coursework, I have focused on building systems that save people time: internal workflows,
              AI-assisted experiences, and platforms that make repetitive tasks less manual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}