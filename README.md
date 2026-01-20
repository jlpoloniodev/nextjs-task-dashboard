# nextjs-task-dashboard
Task Dashboard en Next.js (App Router) + Tailwind. CRUD de tareas (crear, completar, eliminar), búsqueda con debounce, filtros (todas/pendientes/hechas), contador y “limpiar completadas”. Persistencia en localStorage y demo de fetch con useEffect.


# Task Dashboard (Next.js + Tailwind)

[ES](#español) • [EN](#english)

---

## Español

### 📌 Descripción

**Task Dashboard** es una aplicación construida con **Next.js (App Router)** y **Tailwind CSS** para gestionar tareas de forma rápida y sencilla.

Incluye:

* ✅ CRUD de tareas: crear, marcar como completada y eliminar
* 🔎 Búsqueda con **debounce**
* 🧰 Filtros: **todas / pendientes / hechas**
* 🧹 Acción “**Limpiar completadas**”
* 💾 Persistencia en **localStorage**
* 🌐 Demo de fetch para practicar asincronía con `useEffect` (JSONPlaceholder)

---

### 🚀 Tecnologías

* Next.js (App Router)
* React (Hooks)
* TypeScript
* Tailwind CSS

---

### ✅ Requisitos

* Node.js 18+ (recomendado)
* npm / pnpm / yarn

---

### ▶️ Instalación y ejecución

```bash
# instalar dependencias
npm install

# arrancar en modo desarrollo
npm run dev
```

Abre `http://localhost:3000` en el navegador.

---

### 🏗️ Build (producción)

```bash
npm run build
npm run start
```

---

### 🗂️ Estructura del proyecto (resumen)

```
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    tasks/
      TaskForm.tsx
      TaskList.tsx
      TaskItem.tsx
      TaskFilters.tsx
    RemoteTodos.tsx
  hooks/
    useLocalStorageState.ts
    useDebouncedValue.ts
  types/
    task.ts
```

---

### 🧠 Notas

* El estado de tareas se guarda en `localStorage` bajo la clave `tasks`.
* La sección “Fetch demo” consume JSONPlaceholder para practicar `fetch` + `useEffect`.

---

## English

### 📌 Overview

**Task Dashboard** is a **Next.js (App Router)** + **Tailwind CSS** app to manage tasks quickly and easily.

Features:

* ✅ Task CRUD: create, toggle complete, delete
* 🔎 **Debounced** search
* 🧰 Filters: **all / open / done**
* 🧹 “**Clear completed**” action
* 💾 **localStorage** persistence
* 🌐 Fetch demo to practice async logic with `useEffect` (JSONPlaceholder)

---

### 🚀 Tech Stack

* Next.js (App Router)
* React (Hooks)
* TypeScript
* Tailwind CSS

---

### ✅ Requirements

* Node.js 18+ (recommended)
* npm / pnpm / yarn

---

### ▶️ Install & Run

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

### 🏗️ Production Build

```bash
npm run build
npm run start
```

---

### 🗂️ Project Structure (summary)

```
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    tasks/
      TaskForm.tsx
      TaskList.tsx
      TaskItem.tsx
      TaskFilters.tsx
    RemoteTodos.tsx
  hooks/
    useLocalStorageState.ts
    useDebouncedValue.ts
  types/
    task.ts
```

---

### 🧠 Notes

* Tasks are stored in `localStorage` under the `tasks` key.
* The “Fetch demo” uses JSONPlaceholder to practice `fetch` + `useEffect`.
