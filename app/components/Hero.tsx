export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-radial-toxic">
      {/* floating gas particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-1/3 h-2 w-2 rounded-full bg-toxic-400/50 blur-[1px] animate-floatGlow" />
        <div className="absolute left-[22%] top-2/3 h-1.5 w-1.5 rounded-full bg-toxic-300/40 blur-[1px] animate-floatGlow [animation-delay:1.5s]" />
        <div className="absolute right-[15%] top-1/4 h-2 w-2 rounded-full bg-toxic-400/40 blur-[1px] animate-floatGlow [animation-delay:0.8s]" />
        <div className="absolute right-[28%] top-3/4 h-1 w-1 rounded-full bg-toxic-300/50 animate-floatGlow [animation-delay:2.4s]" />
      </div>

      <div className="container-narrow grid min-h-[88vh] grid-cols-1 items-center gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-toxic-400/60" /> Apex Legends · Legend
          </span>

          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
            <span className="gradient-text">CAUSTIC</span>
          </h1>

          <p className="mt-3 font-mono text-sm uppercase tracking-[0.4em] text-slate-400">
            Alexander Nox / The Toxic Trapper
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            アペックス・ゲームスを自身の実験室に見立てた男。Noxガスが充満する閉空間で、
            敵は視界を奪われ、呼吸ごとに生命を削り取られる。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#abilities" className="btn-toxic">
              アビリティを解析
              <span aria-hidden>→</span>
            </a>
            <a href="#lore" className="btn-ghost">
              ロアを読む
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Type</dt>
              <dd className="mt-1 text-sm font-semibold text-white">防衛型</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Tier</dt>
              <dd className="mt-1 text-sm font-semibold text-toxic-300">S / 屋内戦</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Gas</dt>
              <dd className="mt-1 text-sm font-semibold text-white">Nox 物質</dd>
            </div>
          </dl>
        </div>

        {/* emblem card */}
        <div className="lg:col-span-5">
          <div className="glass relative mx-auto aspect-square w-full max-w-sm overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-toxic-400/10 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-toxic-400/80">
                <span>Specimen 048</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-toxic-400" /> LIVE
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <svg
                  viewBox="0 0 120 120"
                  className="h-32 w-32 text-toxic-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="60" cy="60" r="44" className="opacity-30" />
                  <path d="M44 50c0-10 7-18 16-18s16 8 16 18c0 8-4 12-6 18-2 6-2 14-2 14H52s0-8-2-14c-2-6-6-10-6-18Z" strokeLinejoin="round" />
                  <path d="M52 36c-6-2-14 0-14 8M68 36c6-2 14 0 14 8" strokeLinecap="round" />
                  <path d="M56 70v8M64 70v8" strokeLinecap="round" />
                </svg>
                <div className="mt-4 font-mono text-xs tracking-[0.3em] text-slate-400">
                  NOX RESPIRATOR MK-IV
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-[11px] text-slate-400">
                <div className="rounded-lg border border-white/10 px-3 py-2">
                  <div className="text-toxic-400/80">TOXICITY</div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded bg-white/10">
                    <div className="h-full w-[92%] bg-toxic-400" />
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 px-3 py-2">
                  <div className="text-toxic-400/80">AREA DENIAL</div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded bg-white/10">
                    <div className="h-full w-[88%] bg-toxic-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-toxic-400/40 to-transparent" />
    </section>
  );
}
