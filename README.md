# 📋 Task Planner - Redux & Persistent Task Management

A clean and intuitive task management application built with **React** and **Redux Toolkit**. Features full **CRUD operations**, category-based task organization, and persistent state management with **Redux Persist**.

## 🔗 Live Demo

_https://hales-task-planner.vercel.app/_

## 📸 Screenshots

| Home Page                                      | Tasks Overview                         |
| ---------------------------------------------- | -------------------------------------- |
| ![Home Page](public/screenshots/home-page.png) | ![Tasks](public/screenshots/tasks.png) |

| Tasks                                  | To-Do List                                   | Completed Tasks                                      |
| -------------------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| ![Tasks](public/screenshots/tasks.png) | ![To-Do](public/screenshots/tasks-to-do.png) | ![Completed](public/screenshots/tasks-completed.png) |

| Task Details                                         | Edit Task                                      | Add New Task                                     |
| ---------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| ![Task Details](public/screenshots/task-details.png) | ![Edit Task](public/screenshots/edit-task.png) | ![Add Task](public/screenshots/add-new-task.png) |

## ✨ Key Features

- **✅ Full Task Management:** Create, read, update, and delete tasks stored locally in your browser.

- **🗂️ Category System:** Organize tasks under three categories — **Study**, **Meeting**, and **Activity** — each with distinct color-coded icons.

- **📅 Due Date & Time:** Assign optional due dates and times to tasks using **MUI Date/Time Pickers**.

- **💾 Persistent State:** Task data is preserved across page refreshes using **Redux Persist** with `localStorage` — your tasks are private and stored only in your browser.

- **📝 Form Validation:** Task title is required, enforced via **Formik** and **Yup** schema validation.

- **📭 Empty State Messages:** Informative placeholders shown when the To-Do or Completed lists are empty.

## 🛠️ Technologies Used

- **React 19 + Vite:** Modern frontend build setup with fast HMR ⚡

- **Redux Toolkit:** (Slices, Store, Persist) 🧠

- **React Router DOM v7:** Client-side routing across pages 🛣️

- **Tailwind CSS v4:** Utility-first styling for a responsive layout 🎨

- **Material UI v7:** Icon library and Date/Time Picker components 🗓️

- **Formik & Yup:** Robust form management and schema-based validation 📋

- **Day.js:** Lightweight date/time parsing and formatting 📆

## 🔍 Technical Highlights

### 🏗️ Redux Architecture

The application uses a dedicated `tasks` slice with synchronous reducers. IDs are generated client-side with `nanoid` from Redux Toolkit, and the `items` array is persisted to `localStorage` so tasks survive page refreshes.

### ⚡ Selector Layer

Reusable selectors (`selectAllTasks`) decouple the component layer from the store shape, keeping components clean and maintainable.

### 🎨 Category-Driven Design

Each task carries a `category` value (study / meeting / activity) that maps to a color-coded icon rendered consistently across the task list, task details, and edit views.

### 🔒 Production-Ready Forms

Forms are managed with **Formik** and validated with **Yup**. Required field enforcement prevents empty tasks from being submitted.

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/halenurgurel/task-planner.git
cd task-planner
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/       # AddTask, EditTask, TaskDetails
├── pages/
│   ├── HomePage/     # Landing page
│   └── TasksPage/    # Main task list (To-Do + Completed)
├── redux/
│   ├── tasks/        # slice, selectors
│   └── store.js      # Redux store with persist config
└── constants/        # Category definitions (icons, colors)
```

## Author

**Halenur Gurel** — _React & Redux Development Project_ 🚀

_🎯 "Focused on building clean, maintainable React applications with persistent storage and intuitive UX."_
