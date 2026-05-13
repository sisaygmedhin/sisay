import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/sisay.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sisay G/Medhin — QA Manager & Product Owner" },
      {
        name: "description",
        content:
          "QA Manager and Product Owner with 8+ years across betting platforms — casino, sportsbook, gamification, identity, notifications.",
      },
    ],
  }),
  component: Index,
});

const domains = [
  "Casino",
  "Sportsbook",
  "Gamification",
  "Identity (KYC)",
  "Notifications",
  "Payments & Wallet",
  "Back Office",
  "Risk & Compliance",
];

function Index() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.35 0.15 255 / 0.45) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center">
        <div className="mx-auto mb-10 h-44 w-44 overflow-hidden rounded-full ring-4 ring-primary shadow-[0_0_60px_-10px_oklch(0.65_0.20_255_/_0.6)]">
          <img
            src={portrait}
            alt="Portrait of Sisay G/Medhin"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Sisay G/Medhin
        </h1>
        <p className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
          QA Manager &amp; Product Owner
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Specializing in iGaming &amp; betting platforms — Casino, Sportsbook,
          Gamification, Identity, and Notification systems. 8+ years building
          reliable test strategies, automation frameworks, and product roadmaps
          that ship.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Get In Touch
          </Link>
          <Link
            to="/experience"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            View Experience
          </Link>
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Platform Coverage
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
