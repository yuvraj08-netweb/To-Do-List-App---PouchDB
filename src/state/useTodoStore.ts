import { create } from "zustand";
import { addTodo, deleteTodo, getTodos, ITodo, updateTodo } from "../lib/pouchdb";

interface TodoState {
  todos: ITodo[];
  fetchTodos: () => Promise<void>;
  addNewTodo: (title: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}

// Zustand store for TODOs
export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  // Fetch all todos from PouchDB
  fetchTodos: async () => {
    const todos = await getTodos();
    set({ todos });
  },

  // Add a new todo
  addNewTodo: async (title) => {
    const newTodo: ITodo = {
      _id: new Date().toISOString(), // Unique ID
      title,
      completed: false,
      createdAt: Date.now(),
    };
    await addTodo(newTodo);
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  // Toggle completion status of a todo
  toggleTodo: async (id) => {
    const todos = await getTodos();
    const todo = todos.find((t) => t._id === id);
    if (todo) {
      const updatedTodo = { ...todo, completed: !todo.completed };
      await updateTodo(updatedTodo);
      set({ todos: todos.map((t) => (t._id === id ? updatedTodo : t)) });
    }
  },

  // Remove a todo
  removeTodo: async (id) => {
    await deleteTodo(id);
    set((state) => ({ todos: state.todos.filter((t) => t._id !== id) }));
  },
}));
