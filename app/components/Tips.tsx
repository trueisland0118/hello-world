const TIPS = [
  {
    n: "01",
    t: "入り口に缶を「見えない」ように置く",
    b: "ドアの死角、階段の踊り場、 loot bin の裏など、敵が必ず通過する背面に缶を置く。視認される配置は即射撃で処理される。",
  },
  {
    n: "02",
    t: "トラップは視界操作装置として使う",
    b: "起爆音と緑の壁で敵の集中を切る。味方が撃ち合っている間に横から缶を投じると、敵は逃げ場を失う。",
  },
  {
    n: "03",
    t: "ウルトは「閉じる」瞬間に撃つ",
    b: "敵が屋内に踏み込んだ直後や、輪ッジリング収縮で室内に押し込まれた瞬間が最有效。脱出路を塞ぐ位置取りを先に作る。",
  },
  {
    n: "04",
    t: "味方にもガスが見える/見えないを把握する",
    b: "味方がガス内で混乱しないよう、声がけとマーキングを徹底。オクタン等の高機動チームメイトとは相性補完を意識する。",
  },
];

export default function Tips() {
  return (
    <section id="tips" className="container-narrow py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-toxic-400/70" /> Field Manual
          </span>
          <h2 className="section-title">実戦プレイングの要点</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          力ではなく、位置で勝つ。コースティック玩家的「100%即時ダメージ」より「30秒の制圧」を選ぶこと。
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TIPS.map((tip) => (
          <div
            key={tip.n}
            className="glass-toxic flex gap-5 p-6 transition hover:bg-toxic-400/[0.10]"
          >
            <div className="font-mono text-2xl font-bold text-toxic-500/60">{tip.n}</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{tip.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{tip.b}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}