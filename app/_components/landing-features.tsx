export function LandingFeatures() {
  const features = [
    {
      title: "Copy, don’t depend",
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
    <section className="border-t border-[var(--card-border)] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Why Anicon
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Lightweight, flexible, and familiar if you already use shadcn.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-none border border-[var(--card-border)] bg-[var(--card)] p-6"
            >
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
