export function LandingFeatures() {
  const features = [
    {
      title: "Copy, don't depend",
      description:
        "Icons are installed as source files in your repo. No extra icon package—just React + Motion.",
    },
    {
      title: "Motion-powered",
      description:
        "Built with Motion (Framer Motion). Hover, tap, and layout animations work out of the box.",
    },
    {
      title: "shadcn-style CLI",
      description:
        "Uses the same registry format and CLI as shadcn. Add your registry URL and install with one command.",
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[var(--card-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Why Anicon
          </h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)] sm:text-base">
            Lightweight, flexible, and familiar if you already use shadcn.
          </p>
        </div>
        <div
          className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {features.map(({ title, description }) => (
            <article
              key={title}
              role="listitem"
              className="rounded-none border border-[var(--card-border)] bg-[var(--card)] p-5 sm:p-6"
            >
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
