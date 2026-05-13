import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/domains")({
  head: () => ({
    meta: [
      { title: "Domains — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "Betting platform domain expertise: casino aggregators, sportsbook, wallet, bonus engine, gamification, KYC, notifications and back office.",
      },
    ],
  }),
  component: DomainsPage,
});

const groups = [
  {
    title: "Casino Game Development & Integration",
    blurb:
      "Integration & QA with leading providers and aggregators.",
    items: [
      "Pragmatic Play",
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
    blurb: "Pre-match and in-play across the full bet lifecycle.",
    items: [
      "Odds feed & pricing",
      "Bet placement & settlement",
      "Live / in-play betting",
      "Risk & liability management",
    ],
  },
  {
    title: "Sportsbook Features",
    blurb: "Player-facing engagement features on top of the core book.",
    items: [
      "Cashout (full & partial)",
      "Flexi Bet",
      "Bore Draw refund rules",
      "Bet Builder / same-game multi",
    ],
  },
  {
    title: "Wallet & Payments",
    blurb: "Money movement, ledger and PSP integrations.",
    items: [
      "Deposits & withdrawals",
      "Wallet ledger & balances",
      "Payment gateway integrations",
      "Reconciliation & settlement",
    ],
  },
  {
    title: "Bonus Engine",
    blurb: "Promo mechanics with wagering and abuse controls.",
    items: [
      "Cashback",
      "Freebet",
      "Deposit bonus & wagering rules",
      "Referral bonus",
      "Bonus abuse detection",
    ],
  },
  {
    title: "Gamification",
    blurb: "Engagement and retention mechanics across the platform.",
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
    title: "Identity & KYC",
    blurb: "Compliance gates from sign-up to withdrawal.",
    items: [
      "KYC / AML workflows",
      "Document verification",
      "Age & jurisdiction checks",
      "PEP / sanctions screening",
    ],
  },
  {
    title: "Notifications",
    blurb: "Multi-channel player communications.",
    items: [
      "Email",
      "SMS",
      "Push",
      "In-app messaging",
    ],
  },
  {
    title: "Back Office, CRM & Reporting",
    blurb: "Operator tooling, segmentation and regulatory reporting.",
    items: [
      "Player management",
      "CRM segmentation & campaigns",
      "Financial & GGR reporting",
      "Regulatory reporting",
      "Audit trails",
      "Operator configuration tools",
    ],
  },
];

function DomainsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Betting Platform
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Domain Expertise
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          End-to-end QA and product ownership across the iGaming stack —
          from game aggregator integration to back office reporting.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/60"
          >
            <h2 className="text-lg font-semibold text-primary">{g.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{g.blurb}</p>
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
