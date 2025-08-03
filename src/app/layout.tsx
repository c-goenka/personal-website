import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layout from "../../components/Layout";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "Chetan's Website",
    description: "HCI researcher and masters student at UC Berkeley",
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
