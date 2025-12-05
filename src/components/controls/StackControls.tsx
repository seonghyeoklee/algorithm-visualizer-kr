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
        <CardTitle className="text-lg md:text-xl">연산 컨트롤</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4">
        {/* Input Section */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="값 입력"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 text-sm md:text-base"
          />
          <Button
            onClick={handlePush}
            disabled={isFull() || !inputValue}
            className="gap-1 md:gap-2 text-sm md:text-base px-3 md:px-4"
          >
            <Plus className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Push</span>
            <span className="sm:hidden">+</span>
          </Button>
        </div>

        {/* Operation Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={pop}
            disabled={isEmpty()}
            variant="outline"
            className="gap-1 md:gap-2 text-sm md:text-base px-2 md:px-3"
          >
            <Minus className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Pop</span>
          </Button>

          <Button
            onClick={peek}
            disabled={isEmpty()}
            variant="outline"
            className="gap-1 md:gap-2 text-sm md:text-base px-2 md:px-3"
          >
            <Eye className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Peek</span>
          </Button>

          <Button
            onClick={clear}
            disabled={isEmpty()}
            variant="outline"
            className="gap-1 md:gap-2 text-sm md:text-base px-2 md:px-3"
          >
            <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Clear</span>
          </Button>
        </div>

        {/* Last Action Display */}
        {lastAction && (
          <div className="p-2.5 md:p-3 bg-muted rounded-md text-xs md:text-sm">
            <p className="font-medium text-xs text-muted-foreground mb-1">
              마지막 연산:
            </p>
            <p>{lastAction}</p>
          </div>
        )}

        {/* Operation Descriptions */}
        <div className="pt-3 md:pt-4 border-t space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">Push:</span> 맨 위에 요소 추가
          </div>
          <div>
            <span className="font-semibold text-foreground">Pop:</span> 맨 위 요소 제거
          </div>
          <div>
            <span className="font-semibold text-foreground">Peek:</span> 맨 위 요소 확인
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
