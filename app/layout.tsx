import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// 如果之前有字体配置，保留它们
// const geistSans = localFont({ src: "./fonts/GeistVF.woff2", variable: "--font-geist-sans" });
// const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff2", variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Rap Name Generator - Generate Your Rap Alias",
  description: "Free online rap name generator. Choose style, lock parts, generate cool rap aliases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}