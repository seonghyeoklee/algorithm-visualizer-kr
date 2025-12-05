"use client";

import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { StackControls } from "@/components/controls/StackControls";
import { CodePanel } from "@/components/CodePanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStackStore } from "@/lib/stores/stackStore";
import { Badge } from "@/components/ui/badge";

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
    <div className="container max-w-7xl py-4 md:py-8 px-4 md:px-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
          <h1 className="text-2xl md:text-3xl font-bold">스택 (Stack)</h1>
          <Badge variant="secondary" className="text-xs md:text-sm">LIFO</Badge>
        </div>
        <p className="text-sm md:text-base text-muted-foreground">
          Last In First Out 원리로 동작하는 선형 자료구조를 시각화합니다.
        </p>
      </div>

      {/* Information Panel */}
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

      {/* Main Visualization Area */}
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

      {/* Fun Educational Content */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-xl">
              🎯 스택이 뭐예요?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/70 p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-lg">🍽️ 접시 쌓기를 상상해보세요!</h4>
              <p className="text-sm leading-relaxed">
                식당에서 접시를 쌓을 때를 떠올려보세요.
                새 접시는 항상 <strong className="text-pink-600">맨 위에</strong> 올리고,
                사용할 때도 <strong className="text-pink-600">맨 위</strong>부터 빼잖아요?
                이게 바로 스택이에요! 🎉
              </p>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-pink-400 to-purple-400">LIFO</Badge>
                마지막이 첫 번째!
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                Last In, First Out의 약자예요.
                <strong className="text-purple-600">가장 나중에 들어온 게 가장 먼저 나가요</strong>!
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">3️⃣ 마지막 입장</Badge>
                <span>→</span>
                <Badge variant="outline">2️⃣</Badge>
                <span>→</span>
                <Badge variant="outline">1️⃣ 첫 입장</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                나갈 때는 3️⃣ → 2️⃣ → 1️⃣ 순서로!
              </p>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <h4 className="font-bold mb-2 text-lg">🎮 어디서 쓰일까요?</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>🔙</span>
                  <div>
                    <strong>뒤로가기 버튼</strong>
                    <p className="text-muted-foreground text-xs">
                      방금 본 페이지부터 차례대로 돌아가죠!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>↩️</span>
                  <div>
                    <strong>실행 취소 (Ctrl+Z)</strong>
                    <p className="text-muted-foreground text-xs">
                      가장 최근 작업부터 취소해요
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>📚</span>
                  <div>
                    <strong>함수 호출</strong>
                    <p className="text-muted-foreground text-xs">
                      프로그램이 함수를 호출할 때 사용해요
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-xl">
              ⚡ 뭘 할 수 있나요?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/70 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📥</span>
                <h4 className="font-bold text-lg">Push (넣기)</h4>
              </div>
              <p className="text-sm leading-relaxed">
                새로운 값을 <strong className="text-purple-600">맨 위에 쏙</strong> 넣어요!
                아주 빨라요 → <Badge variant="default">순식간 O(1)</Badge>
              </p>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📤</span>
                <h4 className="font-bold text-lg">Pop (빼기)</h4>
              </div>
              <p className="text-sm leading-relaxed">
                <strong className="text-purple-600">맨 위</strong>에 있는 값을 빼내요!
                이것도 빨라요 → <Badge variant="default">순식간 O(1)</Badge>
              </p>
            </div>

            <div className="bg-white/70 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👀</span>
                <h4 className="font-bold text-lg">Peek (슬쩍 보기)</h4>
              </div>
              <p className="text-sm leading-relaxed">
                맨 위에 뭐가 있는지만 <strong className="text-purple-600">살짝 확인</strong>해요!
                빼지는 않아요 → <Badge variant="default">순식간 O(1)</Badge>
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span>💡</span>
                왜 이렇게 빠를까요?
              </h4>
              <p className="text-sm leading-relaxed">
                항상 <strong className="text-green-700">맨 위</strong>에서만 작업하니까
                다른 곳을 찾아다닐 필요가 없어요!
                그래서 몇 개가 쌓여있든 시간이 똑같아요! 🚀
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fun Tips */}
      <Card className="border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2 text-xl">
            💭 재미있는 팁!
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <span className="text-4xl mb-2 block">🎂</span>
            <h4 className="font-bold mb-1">팬케이크 쌓기</h4>
            <p className="text-sm text-muted-foreground">
              팬케이크도 맨 위부터 먹잖아요!
            </p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <span className="text-4xl mb-2 block">📱</span>
            <h4 className="font-bold mb-1">앱 전환</h4>
            <p className="text-sm text-muted-foreground">
              최근 앱부터 보여주는 것도 스택!
            </p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <span className="text-4xl mb-2 block">🃏</span>
            <h4 className="font-bold mb-1">카드 덱</h4>
            <p className="text-sm text-muted-foreground">
              카드 맨 위부터 한 장씩!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
