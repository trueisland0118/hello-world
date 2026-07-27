const FACTS = [
  { k: "本名", v: "Alexander Nox" },
  { k: "年齢", v: "48" },
  { k: "出身", v: "Gaea（ガイア）" },
  { k: "所属", v: "Humbert Labs（元）" },
  { k: "ロール", v: "防衛 / トラッパー" },
  { k: "強み", v: "閉所制圧・視界遮断" },
];

export default function QuickFacts() {
  return (
    <section id="overview" className="container-narrow py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-toxic-400/70" /> Dossier
          </span>
          <h2 className="section-title">プロフィール概要</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-500">
          ガイアの元大気化学者アレクサンダー・ノックスは、自らの死を偽装し、極限の実験場としてアペックス・ゲームスに参加した。
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-200/70 md:grid-cols-3">
        {FACTS.map((f) => (
          <div
            key={f.k}
            className="group relative bg-white/80 p-6 transition hover:bg-toxic-400/[0.06]"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-toxic-600/90">
              {f.k}
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-900">{f.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}