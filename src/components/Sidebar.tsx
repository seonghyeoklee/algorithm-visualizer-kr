"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Layers,
  ArrowDownUp,
  Container,
  Link2,
  GitBranch,
  Binary,
  Menu,
  X
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

const dataStructures = [
  {
    category: "기본 자료구조",
    items: [
      { name: "배열", path: "/array", icon: Layers },
      { name: "스택", path: "/stack", icon: ArrowDownUp },
      { name: "큐", path: "/queue", icon: Container },
      { name: "링크드 리스트", path: "/linked-list", icon: Link2 },
    ],
  },
  {
    category: "트리 구조",
    items: [
      { name: "이진 트리", path: "/binary-tree", icon: GitBranch },
      { name: "이진 탐색 트리", path: "/bst", icon: Binary },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-md shadow-lg border border-indigo-200"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-indigo-600" />
        ) : (
          <Menu className="w-6 h-6 text-indigo-600" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-64 border-r border-white/40 bg-white/40 backdrop-blur-md shadow-xl relative overflow-hidden transition-transform duration-300 z-40",
        "md:translate-x-0",
        isOpen ? "fixed inset-y-0 left-0 translate-x-0" : "fixed inset-y-0 left-0 -translate-x-full md:relative"
      )}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-transparent pointer-events-none" />

      <div className="flex h-full flex-col relative z-10">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <Link href="/" className="group">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl group-hover:scale-110 transition-transform">🧪</span>
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  StructLab
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">
                🔬 Experiment. Visualize. Learn.
              </p>
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {dataStructures.map((section) => (
            <div key={section.category}>
              <h2 className="px-2 mb-3 text-xs font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
                {section.category}
              </h2>
              <div className="space-y-1.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group relative overflow-hidden",
                        isActive
                          ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white font-semibold shadow-lg scale-105"
                          : "hover:bg-white/60 hover:shadow-md hover:scale-102"
                      )}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20 animate-pulse" />
                      )}
                      <Icon className={cn(
                        "w-4 h-4 transition-transform group-hover:scale-110",
                        isActive && "drop-shadow-sm"
                      )} />
                      <span className="relative z-10">{item.name}</span>
                      {!isActive && (
                        <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-indigo-200/50 bg-gradient-to-r from-indigo-50/50 to-blue-50/50">
          <p className="text-xs text-center text-muted-foreground">
            ✨ Built with <span className="text-indigo-500">♥</span> Next.js
          </p>
        </div>
      </div>
    </aside>
    </>
  );
}
