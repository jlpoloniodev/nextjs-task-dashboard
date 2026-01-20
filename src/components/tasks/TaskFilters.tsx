"use client";

export type TaskFilter = "all" | "open" | "done";

type TaskFiltersProps = {
    query: string;
    onQueryChange: (v: string) => void;
    filter: TaskFilter;
    onFilterChange: (f: TaskFilter) => void;
};

export const TaskFilters = ({ query, onQueryChange, filter, onFilterChange }: TaskFiltersProps) => {
     return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar tareas…"
        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-zinc-400 sm:max-w-sm"
      />

      <div className="flex gap-2">
        <button
          onClick={() => onFilterChange("all")}
          className={`rounded-xl px-3 py-2 text-sm font-medium border ${
            filter === "all"
              ? "bg-black text-white border-black"
              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => onFilterChange("open")}
          className={`rounded-xl px-3 py-2 text-sm font-medium border ${
            filter === "open"
              ? "bg-black text-white border-black"
              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          Pendientes
        </button>
        <button
          onClick={() => onFilterChange("done")}
          className={`rounded-xl px-3 py-2 text-sm font-medium border ${
            filter === "done"
              ? "bg-black text-white border-black"
              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          Hechas
        </button>
      </div>
    </div>
  );
}