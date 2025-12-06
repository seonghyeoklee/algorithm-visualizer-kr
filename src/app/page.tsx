"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                자료구조를
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                보고, 만지고, 이해하다
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            복잡한 개념을 인터랙티브한 경험으로
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <Link href="/stack">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-10 py-7 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all">
                체험하기
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Interactive Learning */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
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
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl border-2 border-indigo-100 shadow-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    5
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    3
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-indigo-600 font-semibold">Push & Pop</p>
                  <p className="text-xs text-gray-500 mt-1">실시간 시각화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: LIFO Principle */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
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

          {/* Visual Stack Demo */}
          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="text-sm text-indigo-600 font-semibold mb-4">LIFO 원리</div>
            <div className="space-y-2">
              {[3, 2, 1].map((num) => (
                <div
                  key={num}
                  className="w-48 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                  style={{
                    animation: `slideIn 0.5s ease-out ${num * 0.2}s both`
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-4">
              ↑ 마지막에 넣은 것이 먼저 나옴
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Real World Examples */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-16">
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
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Perfect for */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto space-y-16">
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
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {idx + 1}
                </div>
                <p className="text-xl text-gray-800 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Ready to Start */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
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
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-12 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all font-bold">
                <Play className="w-7 h-7 mr-3" />
                스택 실험 시작하기
              </Button>
            </Link>
            <p className="text-sm text-indigo-200">5분이면 충분합니다</p>
          </div>
        </div>
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
