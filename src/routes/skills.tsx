import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "QA management, product ownership and betting-platform domain expertise: casino, sportsbook, gamification, identity, notifications.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Casino & Game Aggregators",
    items: [
      "Pragmatic Play integration",
      "Evolution Gaming (Live Casino)",
      "Spribe (Aviator, crash games)",
      "SmartSoft Gaming",
      "SoftSwiss aggregator",
      "QTech Games",
      "Booming Games",
      "RGS, game launch & RTP validation",
    ],
  },
  {
    title: "Sportsbook",
    items: [
      "Odds feed & pricing",
      "Bet placement & settlement",
      "Live / in-play betting",
      "Cashout (full & partial)",
      "Flexi Bet",
      "Bore Draw refund rules",
      "Bet Builder / same-game multi",
      "Risk & liability management",
    ],
  },
  {
    title: "Wallet, Payments & Bonus Engine",
    items: [
      "Wallet (deposits, withdrawals, ledger)",
      "Payment gateway integrations",
      "Cashback bonus",
      "Freebet",
      "Deposit bonus & wagering rules",
      "Referral bonus",
      "Bonus abuse detection",
      "Reconciliation & settlement",
    ],
  },
  {
    title: "Gamification",
    items: [
      "Missions & quests",
      "Tournaments & leaderboards",
      "Raffle draws",
      "Lucky Wheel",
      "Daily Scratch cards",
      "Loyalty tiers & rewards",
    ],
  },
  {
    title: "Identity, KYC & Notifications",
    items: [
      "KYC / AML workflows",
      "Document verification",
      "Age & jurisdiction checks",
      "Email notifications",
      "SMS notifications",
      "Push notifications",
      "In-app messaging",
    ],
  },
  {
    title: "Back Office, CRM & Reporting",
    items: [
      "Player management",
      "CRM segmentation & campaigns",
      "Financial & GGR reporting",
      "Regulatory reporting",
      "Audit trails",
      "Operator configuration tools",
    ],
  },
  {
    title: "QA Management & PO",
    items: [
      "Test strategy & QA processes",
      "Risk-based testing",
      "Sprint planning & backlog grooming",
      "User stories & acceptance criteria",
      "Stakeholder reporting & quality KPIs",
      "Team mentoring & code/test reviews",
      "Release management",
      "Agile / Scrum",
    ],
  },
  {
    title: "Automation & Tools",
    items: [
      "Selenium WebDriver / Grid",
      "Cypress",
      "Rest Assured",
      "Postman",
      "JMeter (load & stress)",
      "Appium",
      "TestNG / JUnit / Cucumber",
      "Pytest · Robot Framework",
      "Jira · Tuleap · Kapptivate",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Java · Python · JavaScript",
      "C / C++ · Groovy · PHP",
      "Node.js · React",
      "PostgreSQL · MySQL · Oracle",
      "Linux · Windows · Unix",
      "Docker · Kubernetes basics",
      "CI/CD pipelines",
      "OOAD",
    ],
  },
];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Capabilities
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Skills
        </h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h2 className="text-lg font-semibold text-primary">{g.title}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {g.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
