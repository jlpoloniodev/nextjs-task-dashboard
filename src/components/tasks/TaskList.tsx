"use client";

import React from 'react';
import type { Task } from '@/types/task';
import { TaskItem } from './TaskItem';

type TaskListProps = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit?: (id: string, title: string) => void;
};

export const TaskList = ({ tasks, onToggle, onRemove, onEdit }: TaskListProps) => {
    if (tasks.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-zinc-500">
        No hay tareas todavía. Añade la primera 👇
      </div>
    );        
    }

    return (
    <ul className="flex w-full flex-col gap-2">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </ul>
  );
}