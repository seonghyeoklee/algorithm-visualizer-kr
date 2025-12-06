"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home, Beaker } from "lucide-react";

export function TopNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🧪</span>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              StructLab
            </h1>
            <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">
              Data Structure Lab
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/experiments"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              pathname.startsWith("/experiments") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Beaker className="w-4 h-4" />
            Experiments
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
