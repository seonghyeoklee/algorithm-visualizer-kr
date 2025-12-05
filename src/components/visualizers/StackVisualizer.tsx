"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStackStore } from "@/lib/stores/stackStore";

export function StackVisualizer() {
  const items = useStackStore((state) => state.items);
  const maxSize = useStackStore((state) => state.maxSize);

  return (
    <div className="flex flex-col items-center justify-end h-full min-h-[500px] p-8">
      {/* Stack Container */}
      <div className="relative flex flex-col-reverse items-center gap-2 w-32">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                backgroundColor: item.isAnimating ? "#10b981" : "#3b82f6"
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: 100,
                transition: { duration: 0.3 }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="w-32 h-16 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl relative"
              style={{
                backgroundColor: "#3b82f6",
              }}
            >
              {item.value}

              {/* Top indicator */}
              {index === items.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -right-20 text-sm font-normal text-muted-foreground whitespace-nowrap"
                >
                  ← Top
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty State */}
        {items.length === 0 && (
          <div className="w-32 h-16 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
            비어있음
          </div>
        )}
      </div>

      {/* Base Line */}
      <div className="w-40 h-1 bg-border mt-4 rounded-full" />

      {/* Stats */}
      <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold">크기:</span> {items.length} / {maxSize}
        </div>
        <div>
          <span className="font-semibold">상태:</span> {items.length === 0 ? "Empty" : items.length === maxSize ? "Full" : "Available"}
        </div>
      </div>
    </div>
  );
}
