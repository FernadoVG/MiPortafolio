import Header from "@/components/Header";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Vergara | AI, Automation & Digital Products",
  description:
    "Portfolio of Fernando Vergara, computer engineer focused on AI, automation, technical consulting, and digital product execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${syne.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="site-shell">
              <div className="site-glow site-glow-left" />
              <div className="site-glow site-glow-right" />
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
