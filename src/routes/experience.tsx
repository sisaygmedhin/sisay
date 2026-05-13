import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "QA leadership with primary depth on betting platforms; also telecom, location intelligence, rewards & recognition, payments, commerce and travel-adjacent integrations.",
      },
    ],
  }),
  component: ExperiencePage,
});

type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  stack?: string;
};

const roles: Role[] = [
  {
    company: "Convex Technologies",
    title: "QA Manager",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2024 – Present",
    bullets: [
      "Lead QA engineers, testers and analysts across betting platform domains: casino, sportsbook, gamification, identity (KYC) and notifications.",
      "Own end-to-end QA strategy, test plans and acceptance criteria as Product Owner for multiple squads.",
      "Built automation frameworks (Selenium, Rest Assured, JMeter, Postman) covering API, UI, regression and performance.",
      "Risk-based testing on wallet, odds, bet-settlement and bonus engines; reporting quality KPIs to stakeholders.",
    ],
    stack: "JMeter · Selenium (Java) · Postman · TestNG · Cucumber · Rest Assured · Jira",
  },
  {
    company: "Locance · via Excellerent Solutions",
    title: "Senior Automation QA Engineer",
    location: "Carlsbad, California (Remote)",
    period: "Sep 2023 – Present",
    bullets: [
      "API automation for location-smart services: location request, compliance request, smart-zone.",
      "Designed and maintained automation framework matching project structure and CI pipeline.",
      "Wrote acceptance criteria, executed scripts, analyzed results and produced test reports.",
    ],
    stack: "Rest Assured · Postman · TestNG · Cucumber · Jira",
  },
  {
    company: "Arifpay · via Excellerent Solutions",
    title: "Senior Automation QA Engineer",
    location: "Addis Ababa, Ethiopia",
    period: "Sep 2023 – Mar 2024",
    bullets: [
      "Fintech, payment gateways, back office, mobile payments and POS testing.",
      "Created comprehensive test plans coordinated across dev, sales and system test teams.",
      "Performance, load and stress testing for web service applications.",
    ],
    stack: "JMeter · Selenium · Cypress · Appium · Kapptivate · Rest Assured",
  },
  {
    company: "Engage2Excel · via Excellerent Solutions",
    title: "Senior Automation QA Engineer",
    location: "North Carolina, USA",
    period: "Jun 2023 – Oct 2023",
    bullets: [
      "Automation suites for web service applications across SDLC audits.",
      "Reviewed junior testers' scripts and provided feedback to developers.",
    ],
    stack: "Selenium · Cypress · Postman · Appium · Rest Assured",
  },
  {
    company: "Safaricom Ethiopia · via Excellerent Solutions",
    title: "Senior Software QA Engineer (Team Lead)",
    location: "Addis Ababa, Ethiopia",
    period: "May 2022 – Jun 2023",
    bullets: [
      "Led QA on VAS systems: USSD, MMSC, SMSC, OTA, voicemail, M-Pesa USSD.",
      "Incident & change management; performance, regression and integration testing.",
    ],
    stack: "Selenium · Cypress · Appium · JMeter · Rest Assured · Tuleap",
  },
  {
    company: "Dallol Tech",
    title: "Senior Software QA Engineer",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2020 – Apr 2022",
    bullets: [
      "Guided QA team, designed scenarios, scripts and procedures.",
      "Functional, integration, regression and performance testing aligned to business requirements.",
    ],
    stack: "Selenium · Cypress · Postman · Appium · Rest Assured · Jira",
  },
  {
    company: "Bule Hora University",
    title: "QA Engineer / Lecturer",
    location: "Bule Hora, Ethiopia",
    period: "Oct 2017 – Nov 2020",
    bullets: [
      "Documented application test plans from software requirements and technical specs.",
      "Performance testing, defect tracking, automation design pattern adoption.",
    ],
    stack: "Selenium · JMeter · TestNG · Rest Assured",
  },
];

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Career
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Experience
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Strongest depth on betting &amp; iGaming; broader delivery across
          telecom (VAS), location APIs, employee rewards platforms, payments
          &amp; commerce, and integration-heavy domains including travel-style
          transactional flows.
        </p>
      </header>

      <div className="space-y-6">
        {roles.map((r) => (
          <article
            key={r.company + r.period}
            className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/60"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold">{r.title}</h2>
                <p className="text-primary">{r.company}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>{r.period}</p>
                <p>{r.location}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {r.stack && (
              <p className="mt-4 text-xs font-medium text-foreground/80">
                <span className="text-muted-foreground">Stack — </span>
                {r.stack}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
