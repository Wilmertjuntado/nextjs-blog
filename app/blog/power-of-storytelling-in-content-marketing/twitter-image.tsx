import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #111827 70%)",
          color: "white",
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 850, lineHeight: 1.05 }}>
          The Power of Storytelling
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, opacity: 0.9, marginTop: 14 }}>
          in Content Marketing
        </div>
        <div style={{ fontSize: 22, opacity: 0.85, marginTop: 22 }}>
          By Wilmer Juntado
        </div>
      </div>
    ),
    size
  );
}
