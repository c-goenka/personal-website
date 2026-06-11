import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

const description =
    "Engineer finishing my M.S. at UC Berkeley. I build full-stack apps, ML systems, compilers, and developer tools — and I research how AI can make programming feel more human.";

export const metadata: Metadata = {
    metadataBase: new URL("https://cgoenka.me"),
    title: "Chetan Goenka — Software Engineer",
    description,
    keywords: "software engineer, full-stack, machine learning, compilers, developer tools, AI, UC Berkeley, EECS",
    authors: [{ name: "Chetan Goenka" }],
    creator: "Chetan Goenka",
    openGraph: {
        title: "Chetan Goenka — Software Engineer",
        description,
        url: "https://cgoenka.me",
        siteName: "Chetan Goenka",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chetan Goenka — Software Engineer",
        description,
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
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
