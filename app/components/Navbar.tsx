const links = [
  { href: "#overview", label: "概要" },
  { href: "#abilities", label: "アビリティ" },
  { href: "#lore", label: "ロア" },
  { href: "#tips", label: "戦術" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <nav className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-slate-900">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-toxic-400 text-ink-950">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path
                d="M7 8h10M9 8V5a3 3 0 1 1 6 0v3M7 8l-1 12h12l-1-12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          CAUSTIC
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 transition hover:text-toxic-700"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#abilities" className="btn-ghost hidden sm:inline-flex">
          アビリティを見る
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}