import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "What's Your Coffee Personality? | Basecamp Coffee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A2E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            background: "#16213E",
            border: "4px solid #E85D4A",
            borderRadius: "24px",
            padding: "60px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "12px 12px 0px #E85D4A",
          }}
        >
          <div
            style={{
              background: "#E85D4A",
              color: "#1A1A2E",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            Basecamp Coffee
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#F0C987",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            What&apos;s Your Coffee Personality?
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#A89B8C",
              textAlign: "center",
            }}
          >
            Take the quiz and discover your perfect brew
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "36px",
              fontSize: "18px",
              color: "#E8D5B7",
            }}
          >
            <span>Night Owl</span>
            <span style={{ color: "#E85D4A" }}>&#x2022;</span>
            <span>Zen Minimalist</span>
            <span style={{ color: "#E85D4A" }}>&#x2022;</span>
            <span>Artisan Snob</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
