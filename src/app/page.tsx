import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Code2, Lightbulb, Rocket, CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Play,
      title: "인터랙티브 학습",
      description: "직접 조작하며 배우는 실시간 시각화로 자료구조의 원리를 체험하세요",
    },
    {
      icon: Code2,
      title: "실전 중심",
      description: "코딩 테스트와 면접에 바로 적용할 수 있는 실용적인 내용",
    },
    {
      icon: Lightbulb,
      title: "쉬운 설명",
      description: "복잡한 개념도 일상 예시로 쉽게 이해할 수 있어요",
    },
  ];

  const benefits = [
    "보고 만지며 배우는 직관적인 학습",
    "실시간 피드백으로 즉각적인 이해",
    "언제 어디서나 무료로 학습 가능",
    "코딩 테스트 준비에 최적화",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-6xl text-center space-y-8">
          <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 px-4 py-1.5 text-sm">
            <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />
            자료구조를 가장 쉽게 배우는 방법
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              자료구조를
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              실험하고 체험하세요
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            복잡한 자료구조 개념을 인터랙티브한 시각화로 쉽게 이해하고,
            <br className="hidden md:block" />
            코딩 테스트와 면접을 완벽하게 준비하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/stack">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                지금 시작하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-indigo-200 hover:border-indigo-300 px-8 py-6 text-lg rounded-xl">
              둘러보기
            </Button>
          </div>

          {/* Visual Preview */}
          <div className="pt-12">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl border-2 border-indigo-100 shadow-2xl p-8 md:p-12">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl">
                    <Code2 className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">스택 (Stack) 실험실</h3>
                  <p className="text-gray-600">Push, Pop, Peek 연산을 직접 조작하며 LIFO 원리를 체험해보세요</p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {["Push", "Pop", "Peek"].map((op) => (
                      <div key={op} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-200">
                        <p className="font-semibold text-indigo-700">{op}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">StructLab</span>인가요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              자료구조 학습의 새로운 기준을 제시합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-16 md:py-24">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  체험하며 배우는
                </span>
                <br />
                가장 효과적인 학습
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                읽기만 하는 학습은 이제 그만. StructLab과 함께라면 자료구조를
                직접 조작하고 실시간으로 결과를 확인하며 완벽하게 이해할 수 있습니다.
              </p>
              <div className="space-y-3 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <Card className="relative border-2 border-indigo-200 shadow-2xl">
                <CardHeader className="bg-gradient-to-br from-indigo-50 to-blue-50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-6 text-center">
                    <Rocket className="w-16 h-16 text-indigo-600 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-indigo-900">바로 시작하세요!</h4>
                    <p className="text-sm text-indigo-700 mt-2">별도 설치나 로그인 없이 즉시 학습</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-600">4+</p>
                      <p className="text-xs text-gray-600 mt-1">자료구조</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-purple-600">100%</p>
                      <p className="text-xs text-gray-600 mt-1">무료</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-16 md:py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="w-full max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            자료구조 마스터로 가는 첫 걸음, StructLab과 함께하세요
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/stack">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                스택 실험 시작하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="w-full flex justify-center px-4 md:px-8 py-12 bg-gray-50">
        <div className="w-full max-w-6xl text-center">
          <p className="text-sm text-gray-500">
            Queue, Linked List, Tree 등 더 많은 자료구조가 곧 추가됩니다
          </p>
        </div>
      </section>
    </div>
  );
}
