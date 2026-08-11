import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
] as const;

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-900 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400"
          aria-label="Jay Dao home"
        >
          dev.
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-5 text-sm text-neutral-500 sm:gap-8 dark:text-neutral-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
