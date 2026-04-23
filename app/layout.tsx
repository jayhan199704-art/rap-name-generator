import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

// ⚠️ 必须改成你的真实域名
const SITE_URL = "https://www.rap-name-generator.org/";

export const metadata: Metadata = {
  // 关键：解决相对路径 & canonical 问题
  metadataBase: new URL(SITE_URL),

  // SEO核心：标题策略（支持子页面扩展）
  title: {
    default:
      "Free Rap Name Generator (AI) – Cool, Funny & Trap Rap Names",
    template: "%s | Rap Name Generator",
  },

  // SEO核心：描述（覆盖关键词）
  description:
    "Generate cool, funny, and unique rap names instantly. Free AI rap name generator for trap, drill, and hip hop styles. Get rapper name ideas now.",

  // 辅助SEO（Bing + AI抓取）
  keywords: [
    "rap name generator",
    "rapper name generator",
    "rap name ideas",
    "cool rap names",
    "funny rap names",
    "female rap names",
    "trap rap names",
    "drill rap names",
    "hip hop name generator",
    "stage name generator",
    "rap alias generator",
  ],

  // 爬虫控制（精简版即可）
  robots: {
    index: true,
    follow: true,
  },

  // 社交分享（不影响排名，但影响点击率）
  openGraph: {
    title: "Free Rap Name Generator (AI)",
    description:
      "Create cool, funny, and unique rap names instantly with our AI generator.",
    url: SITE_URL,
    siteName: "Rap Name Generator",
    images: [
      {
        url: "/og-image.png", // public目录
        width: 1200,
        height: 630,
        alt: "Rap Name Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Rap Name Generator",
    description:
      "Generate your rap name instantly. Cool, funny, and unique ideas.",
    images: ["/og-image.png"],
  },

  // ❗ 注意：这里只给首页 canonical
  // 子页面必须单独写（非常重要）
  alternates: {
    canonical: SITE_URL,
  },

  // 图标（保留你原来的）
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}