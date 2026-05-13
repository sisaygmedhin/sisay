import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/domains")({
  head: () => ({
    meta: [
      { title: "Domains — Sisay G/Medhin" },
      {
        name: "description",
        content:
          "Primary depth on betting & iGaming platforms; additional experience across telecom, location intelligence, rewards & recognition, payments & commerce, and travel-related integrations.",
      },
    ],
  }),
  component: DomainsPage,
});

const bettingPlatformGroups = [
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

const additionalDomains = [
  {
    title: "Telecom & mobile services",
    blurb: "Carrier-side value-added services and subscriber journeys.",
    items: [
      "VAS: USSD, SMSC, MMSC, OTA, voicemail",
      "Mobile money–adjacent USSD flows",
      "Incident & change management alongside regression and performance testing",
    ],
  },
  {
    title: "Location intelligence",
    blurb: "Geo-aware APIs and compliance-oriented location workflows.",
    items: [
      "Location request & compliance request APIs",
      "Smart-zone and geo-policy scenarios",
      "API automation embedded in CI/CD",
    ],
  },
  {
    title: "Rewards & recognition",
    blurb: "Enterprise recognition and engagement platforms.",
    items: [
      "Web services automation across full SDLC quality gates",
      "Regression coverage for recognition program journeys",
      "Code reviews and mentoring for test automation",
    ],
  },
  {
    title: "Payments & commerce",
    blurb: "Money movement, terminals, and operator back office.",
    items: [
      "Payment gateways, POS and mobile payment flows",
      "Back-office coordination across dev and field stakeholders",
      "Load, stress and performance validation",
    ],
  },
  {
    title: "Travel & mobility",
    blurb: "High-volume consumer flows and partner integrations.",
    items: [
      "Integration testing across partner APIs and inventory-style services",
      "Reliability and regression on booking-adjacent transactional paths",
      "Automation patterns portable to travel and mobility products",
    ],
  },
];

const domainSectionFrame =
  "rounded-2xl border-2 border-primary/35 bg-card/40 p-6 shadow-[0_0_0_1px_oklch(0.65_0.12_255_/_0.08)] md:p-8";

function DomainCard({
  title,
  blurb,
  items,
}: {
  title: string;
  blurb: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{blurb}</p>
      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DomainsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Industries &amp; platforms
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Domain expertise
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          <span className="font-medium text-foreground">
            Betting &amp; iGaming is the core depth
          </span>{" "}
          — casino through back office. Additional delivery spans telecom,
          location services, employee rewards, payments &amp; commerce, and
          travel-adjacent integrations.
        </p>
      </header>

      <div className={domainSectionFrame}>
        <div className="border-b border-border pb-6 md:flex md:items-end md:justify-between md:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Primary focus
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Betting platform &amp; iGaming
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              End-to-end QA and product ownership across the stack — aggregators
              and sportsbook through wallet, bonuses, gamification, identity,
              messaging and operator tooling.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {bettingPlatformGroups.map((g) => (
            <DomainCard
              key={g.title}
              title={g.title}
              blurb={g.blurb}
              items={g.items}
            />
          ))}
        </div>
      </div>

      <div className={`mt-16 ${domainSectionFrame}`}>
        <div className="border-b border-border pb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Broader delivery
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Telecom, location, rewards, commerce &amp; travel
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Supporting coverage beyond the core book — same QA discipline,
            scoped to each industry&apos;s constraints and release cadence.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {additionalDomains.map((g) => (
            <DomainCard
              key={g.title}
              title={g.title}
              blurb={g.blurb}
              items={g.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
