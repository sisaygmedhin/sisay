export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Sisay G/Medhin · QA Manager & Product Owner</p>
        <p>Addis Ababa, Ethiopia</p>
      </div>
    </footer>
  );
}
