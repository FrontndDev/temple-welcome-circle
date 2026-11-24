import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const CHURCH = "Храм Святителя Николая Чудотворца";

export function SiteHeader() {
  const link = "text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-primary">
          <span className="text-accent text-2xl">☦</span> Никольский храм
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className={link} activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>О храме</Link>
          <Link to="/clergy" className={link} activeProps={{ className: "text-primary" }}>Духовенство</Link>
          <Link to="/contacts" className={link} activeProps={{ className: "text-primary" }}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg text-primary">{CHURCH}</p>
        <p className="mt-1">Русская Православная Церковь · Двери храма открыты ежедневно с 7:00 до 19:00</p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="ornament text-xs uppercase tracking-[0.3em]">{kicker}</p>
      <h2 className="mt-4 text-4xl text-primary md:text-5xl">{title}</h2>
    </div>
  );
}
