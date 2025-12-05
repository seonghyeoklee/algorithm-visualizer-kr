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
  Binary
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

  return (
    <aside className="w-64 border-r bg-card/50 backdrop-blur-sm">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="p-6">
          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight">
              자료구조 시각화
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Interactive Learning
            </p>
          </Link>
        </div>

        <Separator />

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {dataStructures.map((section) => (
            <div key={section.category}>
              <h2 className="px-2 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.category}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </aside>
  );
}
