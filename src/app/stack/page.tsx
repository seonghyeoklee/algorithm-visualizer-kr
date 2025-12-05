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
    <div className="container max-w-7xl py-8 px-6 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">스택 (Stack)</h1>
          <Badge variant="secondary">LIFO</Badge>
        </div>
        <p className="text-muted-foreground">
          Last In First Out 원리로 동작하는 선형 자료구조를 시각화합니다.
        </p>
      </div>

      {/* Information Panel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              현재 크기
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {size()} <span className="text-muted-foreground text-base">/ {maxSize}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Top 요소
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isEmpty() ? (
                <span className="text-muted-foreground">-</span>
              ) : (
                items[items.length - 1]?.value
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              상태
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={
                isEmpty()
                  ? "secondary"
                  : size() === maxSize
                  ? "destructive"
                  : "default"
              }
              className="text-base px-3 py-1"
            >
              {isEmpty() ? "Empty" : size() === maxSize ? "Full" : "Available"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              시간 복잡도
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">O(1)</div>
            <p className="text-xs text-muted-foreground mt-1">
              Push, Pop, Peek
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Visualization Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Visualizer Section */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>시각화</CardTitle>
              <CardDescription>
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
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  마지막 연산
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{lastAction}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Controls Section */}
        <div className="lg:col-span-1">
          <StackControls />
        </div>
      </div>

      {/* Educational Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>스택의 특징</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Badge>LIFO</Badge> Last In First Out
              </h4>
              <p className="text-sm text-muted-foreground">
                가장 나중에 들어온 데이터가 가장 먼저 나갑니다.
                접시를 쌓는 것처럼 위에서부터 하나씩 꺼냅니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">주요 연산</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong className="text-foreground">Push</strong>: 스택의 맨 위에 요소 추가</li>
                <li>• <strong className="text-foreground">Pop</strong>: 스택의 맨 위 요소 제거 및 반환</li>
                <li>• <strong className="text-foreground">Peek</strong>: 맨 위 요소 확인 (제거하지 않음)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">실제 활용 사례</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 함수 호출 스택 (Call Stack)</li>
                <li>• 브라우저 뒤로/앞으로 가기</li>
                <li>• 실행 취소 (Undo) 기능</li>
                <li>• 괄호 검사 알고리즘</li>
                <li>• DFS (깊이 우선 탐색)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>복잡도 분석</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">시간 복잡도</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span className="text-sm">Push (삽입)</span>
                  <Badge variant="default">O(1)</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span className="text-sm">Pop (제거)</span>
                  <Badge variant="default">O(1)</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span className="text-sm">Peek (조회)</span>
                  <Badge variant="default">O(1)</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">공간 복잡도</h4>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span className="text-sm">전체</span>
                <Badge variant="secondary">O(n)</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                n은 스택에 저장된 요소의 개수입니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Code Examples */}
      <CodePanel
        title="코드 구현"
        description="JavaScript와 Python으로 스택을 구현하는 방법입니다."
        timeComplexity={{
          push: "O(1)",
          pop: "O(1)",
          peek: "O(1)",
        }}
        spaceComplexity="O(n)"
        javascriptCode={javascriptCode}
        pythonCode={pythonCode}
      />
    </div>
  );
}
