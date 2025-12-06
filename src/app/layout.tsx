import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNavigation } from "@/components/TopNavigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StructLab | Data Structure Laboratory",
  description: "실험하고, 시각화하고, 배우세요. 자료구조를 인터랙티브하게 학습하는 전문 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
            {/* Decorative background patterns */}
            <div className="fixed inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <TopNavigation />
            <main className="relative">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
