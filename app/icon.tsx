import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070e",
          borderRadius: "7px",
        }}
      >
        {/* stylized gas-drop / respirator lens */}
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#a3e635",
            boxShadow: "0 0 10px 2px rgba(163,230,53,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#05070e",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
