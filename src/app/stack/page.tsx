"use client";

import Link from "next/link";
import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { StackControls } from "@/components/controls/StackControls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStackStore } from "@/lib/stores/stackStore";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lightbulb, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StackPage() {
  const { items, maxSize, lastAction, size, isEmpty } = useStackStore();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 px-4 py-1.5">
              LIFO - Last In, First Out
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              스택 (Stack)
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              접시를 쌓듯이, 마지막에 넣은 것이 먼저 나오는 자료구조
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Section */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="visualize" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-white/80 backdrop-blur-xl border border-indigo-100 p-1.5 rounded-2xl">
              <TabsTrigger
                value="visualize"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Zap className="w-4 h-4 mr-2" />
                체험하기
              </TabsTrigger>
              <TabsTrigger
                value="learn"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                원리 이해
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Code2 className="w-4 h-4 mr-2" />
                코드 보기
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Interactive Visualization */}
            <TabsContent value="visualize" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-indigo-100 bg-white/80 backdrop-blur-xl shadow-2xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      직접 조작하며 배워보세요
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      Push, Pop, Peek 버튼을 눌러 스택이 어떻게 동작하는지 확인하세요
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Controls */}
                    <div className="flex justify-center">
                      <StackControls />
                    </div>

                    {/* Visualizer */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-indigo-100">
                      <StackVisualizer />
                    </div>

                    {/* Status Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-indigo-600">현재 크기</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            {size()} / {maxSize}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-purple-600">Top 요소</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {isEmpty() ? "-" : items[items.length - 1]?.value}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-blue-600">상태</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-blue-600">
                            {isEmpty() ? "비어있음" : "데이터 있음"}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-cyan-600">마지막 동작</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xl font-bold text-cyan-600">
                            {lastAction || "없음"}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Tab 2: Learn Principles */}
            <TabsContent value="learn" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* LIFO Principle */}
                <Card className="border-2 border-indigo-100 bg-white/80 backdrop-blur-xl">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-3xl">📚</span>
                    </div>
                    <CardTitle className="text-2xl">LIFO 원리</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-indigo-600">Last In, First Out</strong>
                      <br />
                      가장 나중에 들어온 것이 가장 먼저 나간다는 뜻입니다.
                    </p>
                    <div className="bg-indigo-50 rounded-xl p-4 space-y-2">
                      <p className="text-sm font-semibold text-indigo-900">예시:</p>
                      <p className="text-sm text-indigo-700">
                        1. 첫 번째 접시를 쌓음 → 맨 아래<br />
                        2. 두 번째 접시를 쌓음 → 중간<br />
                        3. 세 번째 접시를 쌓음 → 맨 위<br />
                        <br />
                        접시를 빼낼 때는?<br />
                        → 맨 위(세 번째)부터 꺼냅니다!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Operations */}
                <Card className="border-2 border-purple-100 bg-white/80 backdrop-blur-xl">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <CardTitle className="text-2xl">주요 연산</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-xl p-4">
                        <h4 className="font-bold text-purple-900 mb-1">Push (넣기)</h4>
                        <p className="text-sm text-purple-700">
                          스택의 맨 위에 새로운 요소를 추가합니다.
                          <br />
                          <code className="text-xs bg-purple-100 px-2 py-1 rounded mt-2 inline-block">
                            시간복잡도: O(1)
                          </code>
                        </p>
                      </div>

                      <div className="bg-indigo-50 rounded-xl p-4">
                        <h4 className="font-bold text-indigo-900 mb-1">Pop (빼기)</h4>
                        <p className="text-sm text-indigo-700">
                          스택의 맨 위 요소를 제거하고 반환합니다.
                          <br />
                          <code className="text-xs bg-indigo-100 px-2 py-1 rounded mt-2 inline-block">
                            시간복잡도: O(1)
                          </code>
                        </p>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-4">
                        <h4 className="font-bold text-blue-900 mb-1">Peek (확인)</h4>
                        <p className="text-sm text-blue-700">
                          맨 위 요소를 제거하지 않고 값만 확인합니다.
                          <br />
                          <code className="text-xs bg-blue-100 px-2 py-1 rounded mt-2 inline-block">
                            시간복잡도: O(1)
                          </code>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Real World Examples */}
                <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur-xl md:col-span-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-3xl">🌍</span>
                    </div>
                    <CardTitle className="text-2xl">실생활 예시</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          emoji: "🍽️",
                          title: "접시 쌓기",
                          desc: "식당에서 깨끗한 접시를 쌓아두고, 맨 위부터 사용하는 것"
                        },
                        {
                          emoji: "📚",
                          title: "책 더미",
                          desc: "책을 쌓아두고 위에서부터 하나씩 꺼내서 읽는 것"
                        },
                        {
                          emoji: "⬅️",
                          title: "뒤로 가기",
                          desc: "브라우저에서 가장 최근 페이지부터 뒤로 가는 것"
                        }
                      ].map((example, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center cursor-pointer"
                        >
                          <div className="text-5xl mb-3">{example.emoji}</div>
                          <h4 className="font-bold text-blue-900 mb-2">{example.title}</h4>
                          <p className="text-sm text-blue-700">{example.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Tab 3: Code Example */}
            <TabsContent value="code" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-indigo-100 bg-white/80 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">JavaScript 구현</CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      스택을 JavaScript 클래스로 구현한 예제입니다
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                      <pre className="text-sm text-gray-100 font-mono">
                        <code>{`class Stack {
  constructor() {
    this.items = [];
    this.maxSize = 10;
  }

  // Push: 요소 추가
  push(value) {
    if (this.items.length >= this.maxSize) {
      throw new Error("Stack Overflow");
    }
    this.items.push(value);
  }

  // Pop: 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items.pop();
  }

  // Peek: 맨 위 요소 확인
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 현재 크기 반환
  size() {
    return this.items.length;
  }

  // 모든 요소 제거
  clear() {
    this.items = [];
  }
}

// 사용 예시
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());  // 3
console.log(stack.pop());   // 3
console.log(stack.size());  // 2`}</code>
                      </pre>
                    </div>

                    <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
                      <p className="text-sm text-indigo-900">
                        <strong>💡 핵심 포인트:</strong>
                        <br />
                        • 배열의 <code className="bg-indigo-100 px-2 py-0.5 rounded">push()</code>와{" "}
                        <code className="bg-indigo-100 px-2 py-0.5 rounded">pop()</code>을 사용하면 쉽게 구현 가능
                        <br />
                        • 모든 연산이 O(1) 시간복잡도
                        <br />• Overflow(넘침)와 Underflow(빔) 상태를 체크해야 함
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              스택의 원리를 이해하셨나요?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              다른 자료구조도 같은 방식으로 배워보세요
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              다른 자료구조 보기
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
