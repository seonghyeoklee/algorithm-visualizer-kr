import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container max-w-6xl py-12 px-6">
      {/* Hero Section */}
      <div className="mb-16 space-y-4">
        <Badge variant="secondary" className="mb-2">
          Interactive Learning Platform
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          자료구조를 시각적으로 배우세요
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          인터랙티브한 애니메이션으로 자료구조의 동작 원리를 직관적으로 이해하고,
          직접 조작하며 학습할 수 있습니다.
        </p>
      </div>

      {/* Data Structures Grid */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">기본 자료구조</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/stack" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    스택 (Stack)
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    LIFO (Last In First Out) 원리로 동작하는 선형 자료구조
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Push</Badge>
                    <Badge variant="outline">Pop</Badge>
                    <Badge variant="outline">Peek</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/queue" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    큐 (Queue)
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    FIFO (First In First Out) 원리로 동작하는 선형 자료구조
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Enqueue</Badge>
                    <Badge variant="outline">Dequeue</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/array" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    배열 (Array)
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    인덱스로 빠르게 접근 가능한 기본 자료구조
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Insert</Badge>
                    <Badge variant="outline">Delete</Badge>
                    <Badge variant="outline">Access</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/linked-list" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    링크드 리스트
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    노드가 포인터로 연결된 동적 선형 자료구조
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Insert</Badge>
                    <Badge variant="outline">Delete</Badge>
                    <Badge variant="outline">Search</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">트리 구조</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/binary-tree" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    이진 트리 (Binary Tree)
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    각 노드가 최대 2개의 자식을 가지는 계층적 구조
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Preorder</Badge>
                    <Badge variant="outline">Inorder</Badge>
                    <Badge variant="outline">Postorder</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/bst" className="group">
              <Card className="transition-all hover:shadow-md hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    이진 탐색 트리 (BST)
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>
                    정렬된 구조로 빠른 검색이 가능한 이진 트리
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="outline">Insert</Badge>
                    <Badge variant="outline">Search</Badge>
                    <Badge variant="outline">Delete</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">🎨 실시간 시각화</h3>
          <p className="text-sm text-muted-foreground">
            각 연산마다 부드러운 애니메이션으로 동작 과정을 확인할 수 있습니다.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">⚡ 인터랙티브</h3>
          <p className="text-sm text-muted-foreground">
            직접 값을 입력하고 조작하며 자료구조의 원리를 체험할 수 있습니다.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">📚 코드 예시</h3>
          <p className="text-sm text-muted-foreground">
            실제 코드 구현과 시간 복잡도를 함께 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
