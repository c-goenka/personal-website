import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "Chetan Goenka - HCI Researcher & EECS Student",
    description: "HCI researcher and EECS M.S. student at UC Berkeley exploring human-computer interaction, AI-assisted programming, and technology design.",
    keywords: "HCI, human-computer interaction, AI, programming, UC Berkeley, research, technology design",
    authors: [{ name: "Chetan Goenka" }],
    creator: "Chetan Goenka",
    openGraph: {
        title: "Chetan Goenka - HCI Researcher & EECS Student",
        description: "HCI researcher and EECS M.S. student at UC Berkeley exploring human-computer interaction, AI-assisted programming, and technology design.",
        url: "https://cgoenka.me",
        siteName: "Chetan Goenka",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Chetan Goenka - HCI Researcher & EECS Student",
        description: "HCI researcher and EECS M.S. student at UC Berkeley exploring human-computer interaction, AI-assisted programming, and technology design.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} font-sans antialiased`}>
                <ThemeProvider>
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </body>
        </html>
    );
}
