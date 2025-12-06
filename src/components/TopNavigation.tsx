"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function TopNavigation() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full"
    >
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-indigo-100/50"></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-blue-50/50"></div>

      <div className="relative max-w-7xl mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative text-3xl">🧪</div>
          </motion.div>

          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              StructLab
            </h1>
            <span className="text-[10px] md:text-xs text-gray-500 -mt-1 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
              Data Structure Lab
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2.5 rounded-xl font-medium text-sm transition-all",
                pathname === "/"
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-gray-600 hover:text-gray-900 hover:bg-indigo-50"
              )}
            >
              Home
            </motion.div>
          </Link>

          <Link href="/stack">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2.5 rounded-xl font-medium text-sm transition-all",
                pathname.startsWith("/stack")
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-gray-600 hover:text-gray-900 hover:bg-indigo-50"
              )}
            >
              Stack
            </motion.div>
          </Link>
        </nav>

        {/* Mobile indicator */}
        <div className="md:hidden">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </motion.header>
  );
}
