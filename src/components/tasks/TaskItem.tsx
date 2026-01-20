"use client";

import { useEffect, useRef, useState } from 'react';
import type { Task } from '@/types/task';

type TaskItemProps = {
    task: Task;
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit?: (id: string, title: string) => void;
};

export const TaskItem = ({ task, onToggle, onRemove, onEdit }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(task.title);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDraft(task.title);
    }, [task.title]);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }       
    }, [isEditing]);

    function startEdit() {
        setDraft(task.title);
        setIsEditing(true);
    }

    function cancelEdit() {
        setDraft(task.title);
        setIsEditing(false);
    }

    function saveEdit() {
        const clean = draft.trim();
        if (!clean) {
            return;
        }   
        onEdit?.(task.id, clean);
        setIsEditing(false);
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            saveEdit();
        } else if (e.key === 'Escape') {
            cancelEdit();
        }
    }

    return (
        <li className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5"
        />

        {!isEditing ? (
          <button
            type="button"
            onDoubleClick={startEdit}
            onClick={startEdit}
            className="min-w-0 text-left"
            title="Click para editar (Enter guarda, Esc cancela)"
          >
            <span
              className={`block truncate ${
                task.done ? "text-zinc-400 line-through" : "text-zinc-900"
              }`}
            >
              {task.title}
            </span>
            <span className="block text-xs text-zinc-500">
              Click para editar
            </span>
          </button>
        ) : (
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            onBlur={saveEdit}
            className="w-full rounded-lg border border-zinc-200 px-3 py-2 outline-none focus:border-zinc-400"
          />
        )}
      </div>

      <div className="ml-3 flex items-center gap-2">
        {!isEditing ? (
          <button
            onClick={startEdit}
            className="rounded-lg px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Editar
          </button>
        ) : (
          <>
            <button
              onClick={saveEdit}
              className="rounded-lg px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Guardar
            </button>
            <button
              onClick={cancelEdit}
              className="rounded-lg px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Cancelar
            </button>
          </>
        )}

        <button
          onClick={() => onRemove(task.id)}
          className="rounded-lg px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          Eliminar
        </button>
      </div>
    </li>
    )
}