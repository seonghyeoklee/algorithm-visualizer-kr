"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStackStore } from "@/lib/stores/stackStore";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function StackVisualizer() {
  const items = useStackStore((state) => state.items);
  const maxSize = useStackStore((state) => state.maxSize);

  const pastelColors = [
    "linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)", // 핑크
    "linear-gradient(135deg, #E0BBE4 0%, #D8BFD8 100%)", // 라벤더
    "linear-gradient(135deg, #B0E0E6 0%, #98D8C8 100%)", // 민트
    "linear-gradient(135deg, #FFDAB9 0%, #FFE4B5 100%)", // 복숭아
    "linear-gradient(135deg, #F0E68C 0%, #FFFACD 100%)", // 레몬
  ];

  return (
    <div className="flex flex-col items-center justify-end h-full min-h-[500px] p-8 bg-gradient-to-b from-pink-50/30 via-purple-50/20 to-blue-50/30 rounded-2xl relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-4 right-4 text-pink-200 opacity-50">
        <Sparkles className="w-6 h-6 animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 text-purple-200 opacity-50">
        <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Stack Container */}
      <div className="relative flex flex-col-reverse items-center gap-2 w-44">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const isTop = index === items.length - 1;
            const colorIndex = index % pastelColors.length;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{
                  scale: 0,
                  opacity: 0,
                  y: -100,
                  rotate: -10
                }}
                animate={{
                  scale: isTop ? [1, 1.05, 1] : 1,
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  x: 200,
                  rotate: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.68, -0.55, 0.265, 1.55] // Bouncy easing
                  }
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  mass: 0.8,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative w-44 h-24 rounded-2xl flex items-center justify-center font-bold text-4xl group cursor-pointer"
                style={{
                  background: item.isAnimating
                    ? "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
                    : pastelColors[colorIndex],
                  boxShadow: isTop
                    ? "0 8px 32px -8px rgba(255, 182, 193, 0.6), 0 0 0 3px rgba(255, 255, 255, 0.8), inset 0 2px 8px rgba(255, 255, 255, 0.5)"
                    : "0 4px 16px -4px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(255, 255, 255, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.4)",
                  color: "#5a4a7a",
                }}
              >
                {/* Cute shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute -top-1 -right-1 w-20 h-20 bg-white/40 rounded-full blur-2xl"
                  />
                </div>

                {/* Value with cute style */}
                <span className="relative z-10 drop-shadow-sm">
                  {item.value}
                </span>

                {/* Cute sparkles for top element */}
                {isTop && (
                  <>
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1, repeat: Infinity }
                      }}
                      className="absolute -top-2 -right-2 text-pink-400"
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -3, 0]
                      }}
                      transition={{
                        y: { duration: 1.5, repeat: Infinity }
                      }}
                      className="absolute -right-28 flex items-center gap-2"
                    >
                      <Badge
                        className="shadow-lg bg-gradient-to-r from-pink-400 to-purple-400 text-white border-0 text-sm px-3 py-1 rounded-full"
                      >
                        ✨ Top
                      </Badge>
                    </motion.div>
                  </>
                )}

                {/* Floating hearts on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute text-xl"
                      initial={{
                        x: "50%",
                        y: "50%",
                        opacity: 0
                      }}
                      animate={{
                        y: ["50%", "-50%"],
                        x: `${50 + (i - 1) * 30}%`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      💖
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty State - Cute version */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0]
            }}
            transition={{
              y: { duration: 2, repeat: Infinity }
            }}
            className="w-44 h-24 border-4 border-dashed border-pink-200 rounded-2xl flex flex-col items-center justify-center text-muted-foreground backdrop-blur-sm bg-white/50"
          >
            <span className="text-3xl mb-1">📦</span>
            <span className="text-sm font-medium">비어있어요!</span>
          </motion.div>
        )}
      </div>

      {/* Cute Platform */}
      <motion.div
        className="relative mt-8 w-52 h-3 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-full"
        animate={{
          boxShadow: [
            "0 0 20px rgba(255, 182, 193, 0.3)",
            "0 0 30px rgba(216, 191, 216, 0.5)",
            "0 0 20px rgba(255, 182, 193, 0.3)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-purple-300/20 to-blue-300/20 blur-xl rounded-full" />
      </motion.div>

      {/* Cute Stats */}
      <div className="mt-8 flex gap-3">
        <Badge variant="outline" className="text-sm px-4 py-2 rounded-full bg-white/80 border-pink-200">
          <span className="text-muted-foreground mr-1">📊</span>
          <span className="font-bold text-foreground">
            {items.length} / {maxSize}
          </span>
        </Badge>
        <Badge
          className={`text-sm px-4 py-2 rounded-full border-0 ${
            items.length === 0
              ? "bg-gradient-to-r from-gray-300 to-gray-400"
              : items.length === maxSize
              ? "bg-gradient-to-r from-pink-400 to-red-400"
              : "bg-gradient-to-r from-green-300 to-emerald-400"
          } text-white`}
        >
          {items.length === 0
            ? "😴 Empty"
            : items.length === maxSize
            ? "🔥 Full"
            : "✨ Available"}
        </Badge>
      </div>
    </div>
  );
}
