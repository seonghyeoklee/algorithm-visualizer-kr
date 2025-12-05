"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface CodePanelProps {
  title: string;
  description: string;
  timeComplexity: {
    push?: string;
    pop?: string;
    peek?: string;
    search?: string;
  };
  spaceComplexity: string;
  javascriptCode: string;
  pythonCode: string;
}

export function CodePanel({
  title,
  description,
  timeComplexity,
  spaceComplexity,
  javascriptCode,
  pythonCode,
}: CodePanelProps) {
  return (
    <div className="space-y-4">
      {/* Description Card */}
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>

          {/* Complexity */}
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-sm">시간 복잡도:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {Object.entries(timeComplexity).map(([operation, complexity]) => (
                  <Badge key={operation} variant="secondary">
                    {operation}: {complexity}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="font-semibold text-sm">공간 복잡도:</span>{" "}
              <Badge variant="secondary">{spaceComplexity}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>코드 구현 예시</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>

            <TabsContent value="javascript" className="mt-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{javascriptCode}</code>
              </pre>
            </TabsContent>

            <TabsContent value="python" className="mt-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{pythonCode}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
