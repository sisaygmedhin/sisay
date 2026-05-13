import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/domains", label: "Domains" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
            SG
          </span>
          <span className="font-semibold tracking-tight">Sisay G/Medhin</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
