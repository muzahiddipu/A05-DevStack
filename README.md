<div align="center">

# DevStack

### Build a technology stack that fits your next project.

Browse a curated catalog of developer technologies, compare their details, and assemble your own stack.

[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)

</div>

## About

DevStack is a responsive tool for exploring frontend, backend, database, styling, and developer-tool options. Each technology is presented with its icon, category, description, difficulty, rating, and badge.

## Features

- **Explore the catalog:** Browse technology cards in a responsive grid, loaded from local JSON data.
- **Build your stack:** Add technologies, remove individual items, or clear the stack. Duplicate selections are prevented.
- **Stay informed:** See loading feedback while data is fetched and branded toast notifications when the stack changes.

## Built With

- React 19 and TypeScript
- Vite
- Tailwind CSS 4 and DaisyUI
- React Icons
- React Toastify

## Getting Started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax for writing markup-like UI inside JavaScript or TypeScript. It makes React components easier to read and lets them describe the UI they return.

### 2. What is the difference between props and state?

Props are values a component receives from its parent. State is data a component manages and can update, causing React to render the updated UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a component. `App` uses it to keep track of the technologies selected for the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders, such as starting a network request. This project does not use `useEffect` for its JSON: `App` fetches the local file as a promise, and `Technologies` reads that promise with React's `use()` inside a `Suspense` boundary. Suspense displays the loading message while the request is pending.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list items changed, moved, or were removed, so it can update the right elements. Technology cards use each technology's `id` as their key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. `SelectedStack` shows an empty-stack message when there are no selected technologies, and shows the selected items when the list is not empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To send an event back, the parent passes a callback as a prop and the child calls it. Here, `App` passes add and remove handlers through `Technologies` to the cards and stack panel.
