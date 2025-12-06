import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Zap, BookOpen, Layers, ArrowDownUp, Container, Link2 } from "lucide-react";

export default function Home() {
  // 실험 모듈 데이터
  const experiments = [
    {
      id: "stack",
      title: "Stack",
      titleKo: "스택",
      description: "LIFO (Last In First Out) 원리로 동작하는 선형 자료구조",
      icon: ArrowDownUp,
      difficulty: "쉬움",
      operations: ["Push", "Pop", "Peek"],
      status: "available",
      complexity: "O(1)",
      category: "기본 자료구조",
    },
    {
      id: "queue",
      title: "Queue",
      titleKo: "큐",
      description: "FIFO (First In First Out) 원리로 동작하는 선형 자료구조",
      icon: Container,
      difficulty: "쉬움",
      operations: ["Enqueue", "Dequeue", "Front"],
      status: "coming-soon",
      complexity: "O(1)",
      category: "기본 자료구조",
    },
    {
      id: "linked-list",
      title: "Linked List",
      titleKo: "링크드 리스트",
      description: "노드들이 연결된 형태의 선형 자료구조",
      icon: Link2,
      difficulty: "보통",
      operations: ["Insert", "Delete", "Search"],
      status: "coming-soon",
      complexity: "O(n)",
      category: "기본 자료구조",
    },
    {
      id: "array",
      title: "Array",
      titleKo: "배열",
      description: "연속된 메모리 공간에 저장되는 기본 자료구조",
      icon: Layers,
      difficulty: "쉬움",
      operations: ["Access", "Insert", "Delete"],
      status: "coming-soon",
      complexity: "O(1)",
      category: "기본 자료구조",
    },
  ];

  // 통계 데이터
  const stats = [
    {
      label: "총 실험 모듈",
      value: "4",
      icon: Zap,
      trend: "+1 이번 달",
      color: "from-indigo-500 to-blue-500",
    },
    {
      label: "학습 진행도",
      value: "25%",
      icon: TrendingUp,
      trend: "1/4 완료",
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "사용 가능",
      value: "1",
      icon: BookOpen,
      trend: "지금 시작하세요",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-8">
      {/* Hero Section */}
      <div className="mb-12 md:mb-16 text-center space-y-4">
        <Badge variant="secondary" className="mb-2 text-xs md:text-sm">
          🧪 Data Structure Laboratory
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          실험하고, 시각화하고, 배우세요
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          자료구조를 인터랙티브하게 실험하고 학습하는 전문 플랫폼.
          각 자료구조의 동작 원리를 직접 조작하며 깊이 이해할 수 있습니다.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-3 mb-12 md:mb-16">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl`} />
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-3xl font-bold bg-gradient-to-r {stat.color} bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Experiment Modules Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">실험 모듈</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            자료구조를 선택하고 실험을 시작하세요
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment) => {
            const Icon = experiment.icon;
            const isAvailable = experiment.status === "available";

            return (
              <Link
                key={experiment.id}
                href={isAvailable ? `/${experiment.id}` : "#"}
                className={cn(
                  "group",
                  !isAvailable && "pointer-events-none"
                )}
              >
                <Card className={cn(
                  "h-full transition-all duration-200 border-2",
                  isAvailable
                    ? "hover:shadow-xl hover:scale-[1.02] hover:border-primary cursor-pointer"
                    : "opacity-60"
                )}>
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className={cn(
                        "p-2 rounded-lg bg-gradient-to-br",
                        isAvailable
                          ? "from-indigo-500 to-blue-500"
                          : "from-gray-400 to-gray-500"
                      )}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {!isAvailable && (
                        <Badge variant="outline" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <div>
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{experiment.titleKo}</span>
                        {isAvailable && (
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        )}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1">
                        {experiment.title}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {experiment.description}
                    </p>

                    {/* Operations */}
                    <div className="flex flex-wrap gap-2">
                      {experiment.operations.map((op) => (
                        <Badge key={op} variant="outline" className="text-xs">
                          {op}
                        </Badge>
                      ))}
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {experiment.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {experiment.complexity}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 md:mt-20 text-center space-y-3">
        <h3 className="text-xl md:text-2xl font-bold">더 많은 실험 모듈 준비 중</h3>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          트리, 그래프, 해시 테이블 등 다양한 자료구조가 곧 추가됩니다.
        </p>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
