import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Chetan Goenka — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#fcfcfc",
                    color: "#111111",
                    padding: "80px",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.02em" }}>
                    Chetan Goenka
                </div>
                <div style={{ fontSize: 34, color: "#525252", marginTop: 16 }}>
                    Software Engineer · M.S. EECS, UC Berkeley
                </div>
                <div style={{ fontSize: 26, color: "#a3a3a3", marginTop: 48 }}>
                    c-goenka.github.io
                </div>
            </div>
        ),
        { ...size }
    );
}
