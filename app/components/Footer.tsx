export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-narrow py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-white">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-toxic-400 text-ink-950">☣</span>
              CAUSTIC
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
              非公式ファン制作の紹介ページ。Apex Legends および関連キャラクターは Respawn Entertainment / Electronic Arts の商標です。
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            <a href="#top" className="transition hover:text-toxic-300">Top</a>
            <a href="#overview" className="transition hover:text-toxic-300">Overview</a>
            <a href="#abilities" className="transition hover:text-toxic-300">Abilities</a>
            <a href="#lore" className="transition hover:text-toxic-300">Lore</a>
            <a href="#tips" className="transition hover:text-toxic-300">Tips</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Dark Dossier · Built with Next.js</span>
          <span className="font-mono tracking-[0.2em]">NOX_VARIANT // STABLE</span>
        </div>
      </div>
    </footer>
  );
}
