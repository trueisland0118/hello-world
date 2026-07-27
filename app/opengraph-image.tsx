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
          backgroundColor: "#05070e",
          backgroundImage:
            "radial-gradient(60% 70% at 80% 20%, rgba(163,230,53,0.22) 0%, rgba(5,7,14,0) 60%)",
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
            color: "#a3e635",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "48px", height: "2px", background: "#a3e635" }} />
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
                "linear-gradient(135deg, #c4ff4f 0%, #a3e635 45%, #65a30d 100%)",
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
              color: "#94a3b8",
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
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", fontSize: "20px", color: "#cbd5e1" }}>
            <span>
              <span style={{ color: "#a3e635" }}>ROLE</span>　防衛 / トラッパー
            </span>
            <span>
              <span style={{ color: "#a3e635" }}>GAS</span>　Nox 物質
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              color: "#a3e635",
              letterSpacing: "3px",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#a3e635",
                boxShadow: "0 0 8px 2px rgba(163,230,53,0.7)",
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
