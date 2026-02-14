import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Anicon – 500+ Animated Icons for React";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#facc15",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          Anicon
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            background: "linear-gradient(90deg, #facc15, #fbbf24)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          500+ Animated Icons for React
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            textAlign: "center",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Install like shadcn. Animate with Motion.
        </div>

        {/* Bottom badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "48px",
            padding: "12px 24px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ fontSize: "16px", color: "#a1a1aa" }}>
            an-icon.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
