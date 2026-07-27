type Ability = {
  tag: string;
  name: string;
  jp: string;
  desc: string;
  icon: React.ReactNode;
};

const ABILITIES: Ability[] = [
  {
    tag: "Passive",
    name: "Nox Vision",
    jp: "ノックス・ビジョン",
    desc: "自身のガスに包まれた敵の姿が、数秒間壁透しで可視化される。索敵装置要らずで、毒霧の向こう側を支配できる。",
    icon: (
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    tag: "Tactical",
    name: "Nox Gas Trap",
    jp: "ノックス・ガス・トラップ",
    desc: "ガス缶を配置し、敵が接近するか射撃すると起爆。緑色のガスで視界を遮り、継続ダメージを与える。最大6基まで設置可能。",
    icon: (
      <path
        d="M7 9c0-2.8 2.2-5 5-5s5 2.2 5 5v2H7V9ZM5 11h14l-1.5 9h-11L5 11Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    tag: "Ultimate",
    name: "Nox Gas Grenade",
    jp: "ノックス・ガス・グレネード",
    desc: "広範囲を一瞬で断続的なガスで覆い尽くす。屋内戦の神器で、室内の敵を一網打尽にし、攻めの起点を作る。",
    icon: (
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 4a6 6 0 0 1 6 6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
];

export default function Abilities() {
  return (
    <section id="abilities" className="container-narrow py-24">
      <div className="max-w-2xl">
        <span className="section-eyebrow">
          <span className="h-px w-8 bg-toxic-400/60" /> Combat Kit
        </span>
        <h2 className="section-title">3つのNoxアビリティ</h2>
        <p className="mt-5 text-sm leading-relaxed text-slate-400">
          すべての能力は「ガスで領域を支配し、敵の視界と呼吸を奪う」という1つの哲学から派生している。
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {ABILITIES.map((a, i) => (
          <article
            key={a.name}
            className="glass group relative overflow-hidden p-7 transition duration-300 hover:border-toxic-400/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-toxic-400/5 blur-2xl transition group-hover:bg-toxic-400/10" />
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-toxic-400">
                {a.tag}
              </span>
              <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
            </div>

            <div className="relative mt-6">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-toxic-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {a.icon}
              </svg>
            </div>

            <h3 className="relative mt-5 text-xl font-bold text-white">{a.name}</h3>
            <p className="relative font-mono text-xs tracking-[0.2em] text-slate-500">{a.jp}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-slate-300">{a.desc}</p>

            <div className="relative mt-6 h-px w-full bg-gradient-to-r from-toxic-400/40 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
