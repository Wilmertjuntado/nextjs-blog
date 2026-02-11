import { ImageResponse } from "next/og";
import { getPostBySlug } from "../posts";


export const runtime = "edge";

export default function OpenGraphImage() {
  const post = getPostBySlug("power-of-storytelling-in-content-marketing");
const title = post.title;
const subtitle = post.subtitle ?? "";
const slug = `/blog/${post.slug}`;
const author = "Wilmer Juntado";


  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 60%, #0b1220 100%)",
          color: "white",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#22c55e",
              opacity: 0.9,
            }}
          />
          <div style={{ display: "flex", fontSize: 22, opacity: 0.85 }}>
            Blog • Storytelling
          </div>
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 850,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 750,
              opacity: 0.92,
            }}
          >
            {subtitle}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 22,
              opacity: 0.85,
            }}
          >
            Character • Conflict • Resolution • Golden Circle
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 22, fontWeight: 650 }}>
              By {author}
            </div>
            <div style={{ display: "flex", fontSize: 18, opacity: 0.75 }}>
              Practical storytelling frameworks
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 18, opacity: 0.7 }}>
            {slug}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
