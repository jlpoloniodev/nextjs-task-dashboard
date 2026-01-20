"use client";

import { useState, useEffect } from "react";

type RemoteTodo = {
    id: number;
    title: string;
    completed: boolean;
};      

export function RemoteTodos() {
    const [todos, setTodos] = useState<RemoteTodo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
                if (!response.ok) {
                    throw new Error("Error cargando las tareas");
                }
                const data: RemoteTodo[] = (await response.json()) as RemoteTodo[];
                if (!cancelled) {
                    setTodos(data);
                } 
            } catch (err) {
                if (!cancelled) {
                    setError((err instanceof Error) ? err.message : "Error desconocido");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            cancelled = true;
        };    
    }, []);
    
    return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5">
      <h2 className="text-lg font-semibold">Fetch demo</h2>
      <p className="text-sm text-zinc-600">5 tareas remotas (solo para practicar)</p>

      {loading && <p className="mt-3 text-sm">Cargando…</p>}
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {!loading && !error && (
        <ul className="mt-3 space-y-2">
          {todos.map((t) => (
            <li key={t.id} className="flex items-center justify-between">
              <span className={t.completed ? "line-through text-zinc-400" : ""}>{t.title}</span>
              <span className="text-xs text-zinc-500">{t.completed ? "done" : "open"}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
