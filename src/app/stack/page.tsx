"use client";

import Link from "next/link";
import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { StackControls } from "@/components/controls/StackControls";
import { CodePanel } from "@/components/CodePanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStackStore } from "@/lib/stores/stackStore";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Home } from "lucide-react";

const javascriptCode = `class Stack {
  constructor() {
    this.items = [];
    this.maxSize = 10;
  }

  push(value) {
    if (this.items.length >= this.maxSize) {
      throw new Error("Stack Overflow");
    }
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// 사용 예시
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2`;

const pythonCode = `class Stack:
    def __init__(self, max_size=10):
        self.items = []
        self.max_size = max_size

    def push(self, value):
        if len(self.items) >= self.max_size:
            raise Exception("Stack Overflow")
        self.items.append(value)

    def pop(self):
        if self.is_empty():
            raise Exception("Stack Underflow")
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

    def clear(self):
        self.items = []

# 사용 예시
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.peek())  # 30
print(stack.pop())   # 30
print(stack.size())  # 2`;

export default function StackPage() {
  const { items, maxSize, lastAction, size, isEmpty } = useStackStore();

  return (
    <div className="w-full px-4 md:px-8 py-4 md:py-8">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground font-medium">Stack</span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            스택 (Stack)
          </h1>
          <Badge className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white border-0 text-xs md:text-sm px-3 py-1">
            LIFO
          </Badge>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          접시 쌓기처럼 쉽고 재미있는 자료구조! 마지막에 넣은 게 제일 먼저 나와요 🎯
        </p>
      </div>

      {/* Step 1: 스택이란? */}
      <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-300/20 rounded-full blur-3xl" />
        <CardHeader className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">📚</span>
            <CardTitle className="text-xl md:text-2xl">1. 스택이 뭔가요?</CardTitle>
          </div>
          <CardDescription className="text-sm md:text-base">
            일상 생활에서 자주 보는 그것!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/70 p-4 md:p-6 rounded-xl space-y-3">
              <h4 className="font-bold text-lg md:text-xl flex items-center gap-2">
                🍽️ 접시 쌓기
              </h4>
              <p className="text-sm md:text-base leading-relaxed">
                식당에서 접시를 쌓을 때를 생각해보세요!
                새 접시는 항상 <strong className="text-indigo-600">맨 위에</strong> 올리고,
                사용할 때도 <strong className="text-indigo-600">맨 위</strong>부터 빼잖아요?
                <br/><br/>
                이게 바로 <strong className="text-purple-600">스택(Stack)</strong>이에요! 🎉
              </p>
            </div>

            <div className="bg-white/70 p-4 md:p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white border-0">
                  LIFO
                </Badge>
                <h4 className="font-bold text-lg md:text-xl">
                  마지막이 첫 번째!
                </h4>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                <strong className="text-purple-600">Last In, First Out</strong>의 약자예요.
                <br/>
                가장 나중에 들어온 것이 가장 먼저 나간다는 뜻이에요!
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-4 p-3 bg-indigo-50 rounded-lg">
                <Badge variant="outline" className="text-sm">3️⃣ 마지막 입장</Badge>
                <span>→</span>
                <Badge variant="outline" className="text-sm">2️⃣</Badge>
                <span>→</span>
                <Badge variant="outline" className="text-sm">1️⃣ 첫 입장</Badge>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground text-center mt-2">
                나갈 때는 3️⃣ → 2️⃣ → 1️⃣ 순서로!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: 직접 해보기 */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span>🎮</span>
            2. 직접 해볼까요?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            아래 컨트롤로 스택을 조작하며 LIFO 원리를 체험해보세요!
          </p>
        </div>

        {/* 현재 상태 정보 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card className="relative overflow-hidden border-2 border-indigo-200/50 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200/30 rounded-full blur-2xl" />
          <CardHeader className="pb-2 md:pb-3 relative">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">📊</span>
              <CardTitle className="text-xs md:text-sm font-medium text-indigo-600">
                현재 크기
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {size()} <span className="text-muted-foreground text-base md:text-lg">/ {maxSize}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-2 border-purple-200/50 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl" />
          <CardHeader className="pb-2 md:pb-3 relative">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">🔝</span>
              <CardTitle className="text-xs md:text-sm font-medium text-purple-600">
                Top 요소
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {isEmpty() ? (
                <span className="text-muted-foreground">-</span>
              ) : (
                items[items.length - 1]?.value
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-2 border-blue-200/50 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl" />
          <CardHeader className="pb-2 md:pb-3 relative">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">
                {isEmpty() ? "😴" : size() === maxSize ? "🔥" : "✨"}
              </span>
              <CardTitle className="text-xs md:text-sm font-medium text-blue-600">
                상태
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <Badge
              className={`text-sm md:text-base px-3 md:px-4 py-1 md:py-1.5 rounded-full border-0 ${
                isEmpty()
                  ? "bg-gradient-to-r from-gray-300 to-gray-400"
                  : size() === maxSize
                  ? "bg-gradient-to-r from-pink-400 to-red-400"
                  : "bg-gradient-to-r from-green-300 to-emerald-400"
              } text-white shadow-lg`}
            >
              {isEmpty() ? "Empty" : size() === maxSize ? "Full" : "Available"}
            </Badge>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-2 border-indigo-200/50 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200/30 rounded-full blur-2xl" />
          <CardHeader className="pb-2 md:pb-3 relative">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">⚡</span>
              <CardTitle className="text-xs md:text-sm font-medium text-indigo-600">
                시간 복잡도
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              O(1)
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Push, Pop, Peek
            </p>
          </CardContent>
        </Card>
      </div>

        {/* 시각화 영역 */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
        {/* Visualizer Section */}
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">시각화</CardTitle>
              <CardDescription className="text-xs md:text-sm">
                스택의 동작을 실시간으로 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StackVisualizer />
            </CardContent>
          </Card>

          {/* Action Feedback Panel */}
          {lastAction && (
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader className="pb-2 md:pb-3">
                <CardTitle className="text-xs md:text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  마지막 연산
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm">{lastAction}</p>
              </CardContent>
            </Card>
          )}
        </div>

          {/* Controls Section */}
          <div className="lg:col-span-1">
            <StackControls />
          </div>
        </div>
      </div>

      {/* Step 3: 주요 연산 */}
      <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl" />
        <CardHeader className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">⚡</span>
            <CardTitle className="text-xl md:text-2xl">3. 스택으로 뭘 할 수 있나요?</CardTitle>
          </div>
          <CardDescription className="text-sm md:text-base">
            스택의 3가지 핵심 연산을 알아봐요
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Push */}
            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-4xl">📥</span>
                  <h4 className="font-bold text-lg md:text-xl">Push</h4>
                </div>
                <Badge variant="default" className="text-xs">O(1)</Badge>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                새로운 값을 <strong className="text-purple-600">맨 위에 쏙</strong> 넣어요!
              </p>
              <div className="bg-purple-50 p-3 rounded-lg text-xs md:text-sm">
                <code className="text-purple-700">stack.push(10)</code>
                <p className="text-muted-foreground mt-1">→ 10을 스택 맨 위에 추가</p>
              </div>
            </div>

            {/* Pop */}
            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-4xl">📤</span>
                  <h4 className="font-bold text-lg md:text-xl">Pop</h4>
                </div>
                <Badge variant="default" className="text-xs">O(1)</Badge>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                <strong className="text-purple-600">맨 위</strong>에 있는 값을 꺼내요!
              </p>
              <div className="bg-purple-50 p-3 rounded-lg text-xs md:text-sm">
                <code className="text-purple-700">stack.pop()</code>
                <p className="text-muted-foreground mt-1">→ 맨 위 요소 제거 & 반환</p>
              </div>
            </div>

            {/* Peek */}
            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-4xl">👀</span>
                  <h4 className="font-bold text-lg md:text-xl">Peek</h4>
                </div>
                <Badge variant="default" className="text-xs">O(1)</Badge>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                맨 위 값을 <strong className="text-purple-600">살짝 확인</strong>해요!
              </p>
              <div className="bg-purple-50 p-3 rounded-lg text-xs md:text-sm">
                <code className="text-purple-700">stack.peek()</code>
                <p className="text-muted-foreground mt-1">→ 맨 위 요소만 확인 (제거 X)</p>
              </div>
            </div>
          </div>

          {/* 왜 빠를까? */}
          <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 p-4 md:p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold mb-2 flex items-center gap-2 text-base md:text-lg">
              <span>💡</span>
              왜 이렇게 빠를까요?
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              항상 <strong className="text-green-700">맨 위</strong>에서만 작업하니까
              다른 곳을 찾아다닐 필요가 없어요!
              그래서 몇 개가 쌓여있든 <strong className="text-green-700">시간이 똑같아요</strong>! 🚀
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step 4: 실생활 활용 */}
      <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
        <CardHeader className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🌍</span>
            <CardTitle className="text-xl md:text-2xl">4. 어디에 쓰일까요?</CardTitle>
          </div>
          <CardDescription className="text-sm md:text-base">
            우리 주변에서 스택을 만나보세요
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl md:text-4xl">🔙</span>
                <div className="flex-1">
                  <h4 className="font-bold text-base md:text-lg mb-1">웹 브라우저 뒤로가기</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    방금 본 페이지부터 차례대로 돌아가죠!
                    페이지를 방문할 때마다 스택에 Push하고,
                    뒤로가기 버튼을 누르면 Pop해요.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl md:text-4xl">↩️</span>
                <div className="flex-1">
                  <h4 className="font-bold text-base md:text-lg mb-1">실행 취소 (Ctrl+Z)</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    가장 최근 작업부터 취소해요.
                    작업할 때마다 스택에 쌓이고,
                    Ctrl+Z를 누르면 하나씩 꺼내서 취소!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl md:text-4xl">📚</span>
                <div className="flex-1">
                  <h4 className="font-bold text-base md:text-lg mb-1">함수 호출 스택</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    프로그램에서 함수를 호출할 때 사용해요.
                    함수 A가 B를 호출하면, B가 끝나야 A로 돌아가죠!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 md:p-5 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl md:text-4xl">✅</span>
                <div className="flex-1">
                  <h4 className="font-bold text-base md:text-lg mb-1">괄호 검사</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    코드에서 ( ) { } [ ] 가 제대로 닫혔는지 확인!
                    여는 괄호는 Push, 닫는 괄호는 Pop으로 검사해요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 5: 일상 속 스택 */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span>💭</span>
            5. 일상에서 찾아보는 스택
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            우리 주변에 숨어있는 스택의 원리를 발견해보세요!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-5 md:p-6 text-center space-y-3">
              <span className="text-5xl md:text-6xl mb-2 block">🎂</span>
              <h4 className="font-bold text-lg md:text-xl">팬케이크 쌓기</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                팬케이크를 만들 때마다 위에 쌓고,
                먹을 때는 맨 위부터!
                완벽한 스택 구조예요 🥞
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-5 md:p-6 text-center space-y-3">
              <span className="text-5xl md:text-6xl mb-2 block">📱</span>
              <h4 className="font-bold text-lg md:text-xl">앱 전환 화면</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                스마트폰에서 최근 사용한 앱이
                제일 위에 나오는 것도
                스택의 원리를 사용해요!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-5 md:p-6 text-center space-y-3">
              <span className="text-5xl md:text-6xl mb-2 block">🃏</span>
              <h4 className="font-bold text-lg md:text-xl">카드 게임</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                카드를 쌓아두고
                맨 위부터 한 장씩 가져가는 것,
                전형적인 스택이에요!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
