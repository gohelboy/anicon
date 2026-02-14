const FEATURES = [
  {
    icon: "📦",
    title: "Copy, don't depend",
    description:
      "Icons are installed as source files in your repo. No extra icon package — just React + Motion.",
  },
  {
    icon: "✨",
    title: "Motion-powered",
    description:
      "Built with Motion (Framer Motion). Hover, tap, and layout animations work out of the box.",
  },
  {
    icon: "⌨️",
    title: "shadcn-style CLI",
    description:
      "Uses the same registry format and CLI as shadcn. Add your registry URL and install with one command.",
  },
];

export function LandingFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[var(--card-border)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <h2
            id="features-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Why Anicon
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)] sm:text-base">
            Lightweight, flexible, and familiar if you already use shadcn.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon, title, description }) => (
            <article
              key={title}
              className="glow-card border border-[var(--card-border)] bg-[var(--surface)] p-6 sm:p-7"
            >
              <span className="text-2xl" aria-hidden>
                {icon}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
