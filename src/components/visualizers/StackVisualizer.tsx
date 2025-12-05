"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStackStore } from "@/lib/stores/stackStore";
import { Badge } from "@/components/ui/badge";

export function StackVisualizer() {
  const items = useStackStore((state) => state.items);
  const maxSize = useStackStore((state) => state.maxSize);

  return (
    <div className="flex flex-col items-center justify-end h-full min-h-[500px] p-8 bg-gradient-to-b from-background via-background/95 to-background/90 rounded-xl">
      {/* Stack Container */}
      <div className="relative flex flex-col-reverse items-center gap-3 w-40">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const isTop = index === items.length - 1;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ scale: 0, opacity: 0, y: -50, rotateX: -15 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  x: 150,
                  rotateZ: 15,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="relative w-40 h-20 rounded-xl flex items-center justify-center font-mono font-bold text-3xl group"
                style={{
                  background: item.isAnimating
                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    : isTop
                    ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                    : "linear-gradient(135deg, #64748b 0%, #475569 100%)",
                  boxShadow: isTop
                    ? "0 10px 40px -10px rgba(59, 130, 246, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                    : "0 4px 20px -4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  color: "white",
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Value */}
                <span className="relative z-10">{item.value}</span>

                {/* Top indicator */}
                {isTop && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -right-24 flex items-center gap-2"
                  >
                    <Badge variant="default" className="shadow-lg shadow-primary/20">
                      Top
                    </Badge>
                  </motion.div>
                )}

                {/* Glow effect on hover */}
                {isTop && (
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty State */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-40 h-20 border-2 border-dashed border-muted-foreground/20 rounded-xl flex items-center justify-center text-muted-foreground text-sm backdrop-blur-sm"
          >
            Empty Stack
          </motion.div>
        )}
      </div>

      {/* Base Platform */}
      <div className="relative mt-6 w-48 h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full">
        <div className="absolute inset-0 bg-primary/10 blur-md rounded-full" />
      </div>

      {/* Stats with modern badges */}
      <div className="mt-8 flex gap-4">
        <Badge variant="outline" className="text-sm px-4 py-2">
          <span className="text-muted-foreground">Size:</span>
          <span className="ml-2 font-bold text-foreground">
            {items.length} / {maxSize}
          </span>
        </Badge>
        <Badge
          variant={
            items.length === 0
              ? "secondary"
              : items.length === maxSize
              ? "destructive"
              : "default"
          }
          className="text-sm px-4 py-2"
        >
          {items.length === 0
            ? "Empty"
            : items.length === maxSize
            ? "Full"
            : "Available"}
        </Badge>
      </div>
    </div>
  );
}
