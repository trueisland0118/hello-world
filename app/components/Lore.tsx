const TIMELINE = [
  {
    year: "Gaea",
    title: "Humbert Labs の首席研究員",
    body: "ガイアの大手大気化学企業で有害ガスの浄化を研究。倫理より成果を優先し、被験者の犠牲をも厭わなかった。",
  },
  {
    year: "Incident",
    title: "実験の暴走と不正発覚",
    body: "環境保護団体アレクサンドリアの調査で違法実験が発覚。責任を問われたノックスは、研究施設ごと証拠を消し去る必要性に迫られる。",
  },
  {
    year: "The Vanish",
    title: "自死の偽装",
    body: "实验室の爆発事故を装い、公式には死亡したこととする。しかし遺体は見つからず、以降の消息は闇に消えた。",
  },
  {
    year: "Apex",
    title: "アペックス・ゲームス参戦",
    body: "合法的に人間を行える唯一の場として異種格闘技戦に現れる。観客は彼を「殺人マシン」と恐れ、出演料の他に被験者データを得ているという噂が絶えない。",
  },
];

export default function Lore() {
  return (
    <section id="lore" className="border-y border-white/5 bg-ink-900/40">
      <div className="container-narrow py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-toxic-400/60" /> Backstory
            </span>
            <h2 className="section-title">科学者から怪物へ</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              アレクサンダー・ノックスは、純粋な探究心と倫理の欠如が合わさった時に生まれる恐怖の体現。
              ガスを支配する者は、空気そのものを武器に変える。
            </p>

            <blockquote className="mt-8 border-l-2 border-toxic-400/60 pl-4">
              <p className="font-serif italic text-slate-300">
                "This is no place for mercy. Only outcomes."
              </p>
              <footer className="mt-2 font-mono text-xs tracking-[0.2em] text-slate-500">
                — Alexander Nox
              </footer>
            </blockquote>
          </div>

          <ol className="relative lg:col-span-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-toxic-400/60 via-white/10 to-transparent" />
            {TIMELINE.map((t) => (
              <li key={t.title} className="relative mb-10 pl-10 last:mb-0">
                <span className="absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-ink-950 ring-2 ring-toxic-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-toxic-400" />
                </span>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-toxic-400">
                  {t.year}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
