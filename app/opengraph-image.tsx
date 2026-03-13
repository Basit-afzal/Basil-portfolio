import { ImageResponse } from "next/og";

export const alt = "M. Basit Ali Afzal | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0c0f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: 12,
          }}
        >
          M. Basit Ali Afzal
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 24,
          }}
        >
          Frontend Developer
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#71717a",
          }}
        >
          React.js · Next.js · TypeScript · Lahore, Pakistan
        </div>
      </div>
    ),
    { ...size }
  );
}
