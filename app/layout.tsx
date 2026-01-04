import Header from "@/components/header"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando | Portafolio personal",
  description: "Cree este portal para que se pueda saber más sobre mi trabajo y las cosas que ha logrado hasta el momento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 h-[5350px]`}>
  
        <div className="absolute inset-0 flex justify-center gap-20 -z-10">
          <div className="bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]" />
          <div className="bg-[#dbd7fb] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]" />
        </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
