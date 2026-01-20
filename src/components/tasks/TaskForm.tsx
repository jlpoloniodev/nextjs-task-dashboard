"use client";

import {useState} from 'react';

type TaskFormProps = {
    onCreate: (title: string) => void;
};

export const TaskForm = ({ onCreate }: TaskFormProps) => {
    const [title, setTitle] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const clean = title.trim();
        if (!clean) return;

        onCreate(clean);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Añade una tarea"
                aria-label='Título de la tarea'
                className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-zinc-400"
            />
            <button type="submit" className="rounded-xl bg-black px-4 py-3 font-medium text-white hover:opacity-90">
                Añadir
            </button>
        </form>
    )
}