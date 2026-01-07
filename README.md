<<<<<<< HEAD
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
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 7547283 (Initial commit from Create Next App)
