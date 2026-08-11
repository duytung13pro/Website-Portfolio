import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username", external: true },
  { label: "Email", href: "mailto:hello@yourdomain.com", external: false },
  { label: "More about me →", href: "#about", external: false }
] as const;

export function Hero() {
  return (
    <section id="top" className="border-b border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black">
      <div className="mx-auto grid min-h-[85vh] w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-24 sm:px-6 sm:py-28 md:grid-cols-12 md:gap-8 lg:px-8 lg:py-32">
        <div className="space-y-8 md:col-span-7">
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-100">
            Hi! I&apos;m Jay Dao.
          </h1>

          <p className="max-w-3xl text-pretty text-base leading-8 text-neutral-600 sm:text-lg dark:text-neutral-400">
            I&apos;m a software developer from <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Vietnam</strong>, currently finishing my senior year in Computer
            Science at the <strong className="font-semibold text-neutral-900 dark:text-neutral-100">University of Cincinnati</strong>. I enjoy building practical software—like custom internal tools that
            eliminated contractor dependency for my family&apos;s business, and most recently, a prototype web application
            designed to explore cognitive offloading.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            {socialLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-x-4">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 ? (
                  <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">
                    |
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.35)] dark:border-neutral-800 dark:bg-neutral-950">
            <Image
              src="/profile.jpg"
              alt="Jay Dao"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
