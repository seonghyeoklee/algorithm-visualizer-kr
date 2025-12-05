"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStackStore } from "@/lib/stores/stackStore";
import { Plus, Minus, Eye, Trash2 } from "lucide-react";

export function StackControls() {
  const [inputValue, setInputValue] = useState("");
  const { push, pop, peek, clear, lastAction, isFull, isEmpty } = useStackStore();

  const handlePush = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      return;
    }
    push(value);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePush();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>연산 컨트롤</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Section */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="값 입력 (숫자)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={handlePush}
            disabled={isFull() || !inputValue}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Push
          </Button>
        </div>

        {/* Operation Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={pop}
            disabled={isEmpty()}
            variant="outline"
            className="gap-2"
          >
            <Minus className="w-4 h-4" />
            Pop
          </Button>

          <Button
            onClick={peek}
            disabled={isEmpty()}
            variant="outline"
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            Peek
          </Button>

          <Button
            onClick={clear}
            disabled={isEmpty()}
            variant="outline"
            className="gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </Button>
        </div>

        {/* Last Action Display */}
        {lastAction && (
          <div className="p-3 bg-muted rounded-md text-sm">
            <p className="font-medium text-xs text-muted-foreground mb-1">
              마지막 연산:
            </p>
            <p>{lastAction}</p>
          </div>
        )}

        {/* Operation Descriptions */}
        <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">Push:</span> 스택의 맨 위에 요소 추가
          </div>
          <div>
            <span className="font-semibold text-foreground">Pop:</span> 스택의 맨 위 요소 제거
          </div>
          <div>
            <span className="font-semibold text-foreground">Peek:</span> 맨 위 요소 확인 (제거 X)
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
