import { ImageResponse } from "next/og";

export const alt = "Caustic — The Toxic Trapper | Apex Legends fan dossier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          backgroundColor: "#f8fafc",
          backgroundImage:
            "radial-gradient(60% 70% at 80% 20%, rgba(163,230,53,0.28) 0%, rgba(255,255,255,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "8px",
            color: "#65a30d",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "48px", height: "2px", background: "#65a30d" }} />
          Apex Legends · Legend Dossier
        </div>

        {/* main title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "140px",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-6px",
              backgroundImage:
                "linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #4d7c0f 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            CAUSTIC
          </div>
          <div
            style={{
              marginTop: "18px",
              fontSize: "32px",
              color: "#64748b",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Alexander Nox — The Toxic Trapper
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(15,23,42,0.08)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", fontSize: "20px", color: "#475569" }}>
            <span>
              <span style={{ color: "#65a30d" }}>ROLE</span>　防衛 / トラッパー
            </span>
            <span>
              <span style={{ color: "#65a30d" }}>GAS</span>　Nox 物質
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              color: "#65a30d",
              letterSpacing: "3px",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#65a30d",
              }}
            />
            NOX_VARIANT // STABLE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}