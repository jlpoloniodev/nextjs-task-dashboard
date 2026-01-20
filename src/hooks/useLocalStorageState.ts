"use client";
import { useState, useEffect } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && "localStorage" in window)
        window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // Ignore write errors
    }
  }, [key, state]);

  return [state, setState] as const;
}
