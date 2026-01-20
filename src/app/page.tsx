"use client";

import { useState } from "react";
import { TaskFilters, type TaskFilter } from "@/components/tasks/TaskFilters";
import type { Task } from "@/types/task";
import { TaskForm } from "@/components/tasks/TaskForm";
import { TaskList } from "@/components/tasks/TaskList";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { RemoteTodos } from "@/components/RemoteTodos";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

function createId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function Home() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>("tasks", []);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<TaskFilter>("all");
  const debouncedQuery = useDebouncedValue(query.trim().toLowerCase(), 250);

  const doneCount = tasks.filter((task) => task.done).length;
  const orderedTasks = [...tasks].sort((a, b) => b.createdAt - a.createdAt);

  const visibleTasks = orderedTasks.filter((task) => {
    const matchesQuery = debouncedQuery.length === 0 || task.title.toLowerCase().includes(debouncedQuery);

    const matchesFilter = filter === "all" ? true : filter === "done" ? task.done : !task.done;

    return matchesQuery && matchesFilter;
  });

  function handleCreate(title: string) {
    const newTask: Task = {
      id: createId(),
      title,
      done: false,
      createdAt: Date.now(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function handleToggle(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleRemove(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleClearDone() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  }

  function handleEdit(id: string, title: string) {
    const clean = title.trim();
    if (!clean) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: clean } : task
      )
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <header className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Task Dashboard</h1>
            <p className="mt-1 text-zinc-600">
              {doneCount}/{tasks.length} completadas
            </p>
          </div>
          <div>
            <button
              onClick={handleClearDone}
              disabled={doneCount === 0}
              className="rounded-xl bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 disabled:opacity-50"
            >
              Limpiar completadas
            </button>
          </div>
        </header>

        <TaskFilters
          query={query}
          onQueryChange={setQuery}
          filter={filter}
          onFilterChange={setFilter}
        />

        <TaskForm onCreate={handleCreate} />
        <TaskList tasks={visibleTasks} onToggle={handleToggle} onRemove={handleRemove} onEdit={handleEdit} />
        <RemoteTodos />
      </main>
    </div>
  );
}
