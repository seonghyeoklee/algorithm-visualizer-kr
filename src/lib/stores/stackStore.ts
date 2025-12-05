import { create } from "zustand";

export interface StackItem {
  id: string;
  value: number;
  isAnimating?: boolean;
}

interface StackState {
  items: StackItem[];
  maxSize: number;
  lastAction: string;
  push: (value: number) => void;
  pop: () => StackItem | undefined;
  peek: () => StackItem | undefined;
  clear: () => void;
  isEmpty: () => boolean;
  isFull: () => boolean;
  size: () => number;
}

export const useStackStore = create<StackState>((set, get) => ({
  items: [],
  maxSize: 10,
  lastAction: "",

  push: (value: number) => {
    const state = get();
    if (state.items.length >= state.maxSize) {
      set({ lastAction: "Stack Overflow! 스택이 가득 찼습니다." });
      return;
    }

    const newItem: StackItem = {
      id: `${Date.now()}-${Math.random()}`,
      value,
      isAnimating: true,
    };

    set({
      items: [...state.items, newItem],
      lastAction: `Push: ${value}를 스택에 추가했습니다.`,
    });

    // 애니메이션 플래그 제거
    setTimeout(() => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === newItem.id ? { ...item, isAnimating: false } : item
        ),
      }));
    }, 500);
  },

  pop: () => {
    const state = get();
    if (state.items.length === 0) {
      set({ lastAction: "Stack Underflow! 스택이 비어있습니다." });
      return undefined;
    }

    const poppedItem = state.items[state.items.length - 1];
    set({
      items: state.items.slice(0, -1),
      lastAction: `Pop: ${poppedItem.value}를 스택에서 제거했습니다.`,
    });

    return poppedItem;
  },

  peek: () => {
    const state = get();
    if (state.items.length === 0) {
      set({ lastAction: "스택이 비어있습니다." });
      return undefined;
    }

    const topItem = state.items[state.items.length - 1];
    set({ lastAction: `Peek: 맨 위 요소는 ${topItem.value}입니다.` });
    return topItem;
  },

  clear: () => {
    set({
      items: [],
      lastAction: "스택을 초기화했습니다.",
    });
  },

  isEmpty: () => get().items.length === 0,
  isFull: () => get().items.length >= get().maxSize,
  size: () => get().items.length,
}));
