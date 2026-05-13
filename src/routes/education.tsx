import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "MSc in Computer Engineering, Addis Ababa University. Certifications in Agile, Docker/Kubernetes, API Testing and more.",
      },
    ],
  }),
  component: EducationPage,
});

const education = [
  {
    school: "Addis Ababa University",
    degree: "MSc, Computer Engineering",
    period: "Oct 2019 – Jul 2022",
    location: "Addis Ababa, Ethiopia",
  },
  {
    school: "Bule Hora University",
    degree: "BSc, Electrical & Computer Engineering",
    period: "Oct 2012 – Jul 2017",
    location: "Bule Hora, Ethiopia",
  },
];

const certs = [
  "Agile Project Management (2022)",
  "Google IT Automation with Python — Professional Certificate (2022)",
  "Introduction to Containers w/ Docker & Kubernetes (2022)",
  "API Testing Using Rest Assured (2022)",
  "Agile with Atlassian Jira (2022)",
  "BMC Helix ITSM — Smart IT 20.x Fundamentals (2022)",
  "CCNA Routing & Switching — Cisco Networking (2017)",
];

const projects = [
  "Amharic Fake News Detection using Machine Learning (2022)",
  "Stock Market Price Prediction using Machine Learning (2022)",
  "Forecasting Ethiopian Agricultural Commodity Prices (2022)",
  "Ethiopian Sign Language Translation using ML (2020)",
];

function EducationPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Background
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Education &amp; Certifications
        </h1>
      </header>

      <div className="space-y-4">
        {education.map((e) => (
          <div
            key={e.school}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-card p-6"
          >
            <div>
              <h2 className="text-lg font-semibold">{e.school}</h2>
              <p className="text-primary">{e.degree}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <p>{e.period}</p>
              <p>{e.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-primary">Certifications</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-primary">
            Research & Projects
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {projects.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
