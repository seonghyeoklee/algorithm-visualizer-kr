"use client";

import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { StackControls } from "@/components/controls/StackControls";
import { CodePanel } from "@/components/CodePanel";

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
  return (
    <div className="container max-w-7xl py-8 px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">스택 (Stack)</h1>
        <p className="text-muted-foreground">
          LIFO (Last In First Out) 원리로 동작하는 선형 자료구조를 시각화합니다.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Visualizer Section */}
        <div className="lg:col-span-2">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <StackVisualizer />
          </div>
        </div>

        {/* Controls Section */}
        <div className="lg:col-span-1">
          <StackControls />
        </div>
      </div>

      {/* Code and Description Section */}
      <div className="mt-8">
        <CodePanel
          title="스택이란?"
          description="스택은 LIFO(Last In First Out) 원리를 따르는 선형 자료구조입니다.
          가장 나중에 들어온 데이터가 가장 먼저 나가는 구조로, 접시를 쌓는 것에 비유할 수 있습니다.
          함수 호출 스택, 브라우저 뒤로가기, 실행 취소(Undo) 기능 등에 사용됩니다."
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
    </div>
  );
}
