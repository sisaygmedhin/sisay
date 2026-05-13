import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "Get in touch with Sisay G/Medhin — QA Manager and Product Owner based in Addis Ababa, Ethiopia.",
      },
    ],
  }),
  component: ContactPage,
});

const items = [
  { label: "Email", value: "sisaygmedhin1@gmail.com", href: "mailto:sisaygmedhin1@gmail.com" },
  { label: "Phone", value: "+251 923 249 354", href: "tel:+251923249354" },
  { label: "Location", value: "Addis Ababa, Ethiopia" },
];

function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        Contact
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
        Let's build reliable platforms
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Open to QA leadership and Product Owner roles in iGaming, betting,
        fintech and platform engineering teams.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.label}
            className="rounded-xl border border-border bg-card p-6 text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {i.label}
            </p>
            {i.href ? (
              <a
                href={i.href}
                className="mt-2 block break-words text-sm font-medium text-foreground hover:text-primary"
              >
                {i.value}
              </a>
            ) : (
              <p className="mt-2 text-sm font-medium text-foreground">
                {i.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="mailto:sisaygmedhin1@gmail.com"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
}
