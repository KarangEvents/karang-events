import type React from "react";
import type { Metadata } from "next";
import { Young_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Karang Events | Elegant Event Management",
  description:
    "Sophisticated event management platform for customers and vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
