"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated background with parallax */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ opacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </motion.div>

        {/* Floating code blocks decoration */}
        <div className="absolute inset-0 -z-5 opacity-20">
          <motion.div
            className="absolute top-20 left-10 text-indigo-600 font-mono text-sm"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            push(5)
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-600 font-mono text-sm"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            pop()
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-blue-600 font-mono text-sm"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            peek()
          </motion.div>
        </div>

        <motion.div
          className="max-w-6xl mx-auto text-center space-y-10"
          style={{ scale }}
        >
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 border border-indigo-200 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                가장 쉽고 재미있는 자료구조 학습
              </span>
            </div>
          </motion.div>

          {/* Main headline with stagger animation */}
          <div className="space-y-6">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                자료구조를
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                경험하세요
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              보고, 만지고, 이해하는 인터랙티브 학습
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/stack">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-10 py-7 text-xl rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  체험하기
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Visual preview with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-indigo-100 shadow-2xl p-8 md:p-12">
                <div className="space-y-6">
                  {/* Animated stack visualization */}
                  <div className="flex justify-center gap-4">
                    {[3, 2, 1].map((num, idx) => (
                      <motion.div
                        key={num}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.9 + idx * 0.2,
                          type: "spring"
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg cursor-pointer"
                      >
                        {num}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="text-center space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      <p className="text-sm font-semibold text-indigo-600">실시간 시각화</p>
                    </div>
                    <p className="text-xs text-gray-500">마우스를 올려보세요</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 1: Interactive Learning with scroll animation */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">읽기만 하는</span>
              <br />
              <span className="text-gray-900">학습은</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">그만</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              직접 조작하고, 실시간으로 변화를 보고,<br />
              진짜 이해가 시작됩니다.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
            <motion.div
              className="relative bg-white rounded-3xl border-2 border-indigo-100 shadow-2xl p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    5
                  </motion.div>
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    3
                  </motion.div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-indigo-600 font-semibold">Push & Pop</p>
                  <p className="text-xs text-gray-500 mt-1">실시간 시각화</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: LIFO Principle */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gray-900">마지막이</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">첫 번째가 되는</span>
            <br />
            <span className="text-gray-900">원리</span>
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Last In, First Out.<br />
            스택의 핵심을 시각적으로 경험하세요.
          </p>

          {/* Animated stack */}
          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="text-sm text-indigo-600 font-semibold mb-4">LIFO 원리</div>
            <div className="space-y-2">
              {[3, 2, 1].map((num, idx) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring"
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.5)"
                  }}
                  viewport={{ once: true }}
                  className="w-48 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg cursor-pointer"
                >
                  {num}
                </motion.div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-4">
              ↑ 마지막에 넣은 것이 먼저 나옴
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Real World Examples */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gray-900">일상 속</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">자료구조</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🍽️", title: "접시 쌓기", desc: "맨 위부터 하나씩" },
              { emoji: "📚", title: "책 더미", desc: "위에 올리고 빼기" },
              { emoji: "⬅️", title: "뒤로 가기", desc: "브라우저 히스토리" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 4: Perfect for */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <motion.div
          className="max-w-4xl mx-auto space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-center">
            <span className="text-gray-900">이런 분들께</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">완벽합니다</span>
          </h2>

          <div className="space-y-6">
            {[
              "코딩 테스트를 준비하는 취준생",
              "자료구조가 어려운 컴공 학생",
              "면접을 앞둔 개발자",
              "기초를 다시 다지고 싶은 분"
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {idx + 1}
                </div>
                <p className="text-xl text-gray-800 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 5: CTA */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            지금 바로
            <br />
            시작하세요
          </h2>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            무료로, 로그인 없이,
            <br />
            언제든지 학습할 수 있습니다
          </p>

          <div className="pt-8 space-y-4">
            <Link href="/stack">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group bg-white text-indigo-600 hover:bg-gray-100 px-12 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-white/50 transition-all font-bold">
                  <Play className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  스택 실험 시작하기
                </Button>
              </motion.div>
            </Link>
            <p className="text-sm text-indigo-200">5분이면 충분합니다</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            StructLab - Data Structure Laboratory
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Queue, Linked List, Tree 등 더 많은 자료구조가 곧 추가됩니다
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
