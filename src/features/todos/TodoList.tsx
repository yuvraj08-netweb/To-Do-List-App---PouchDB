"use client"

import { useState } from "react"
import TodoListItem from "./TodoListItem"

// Define the Todo item type
export interface Todo {
  id: string
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a todo app", completed: false },
    { id: "3", text: "Deploy to production", completed: false },
  ])
  const [newTodoText, setNewTodoText] = useState("")

  // Add a new todo
  const addTodo = () => {
    if (newTodoText.trim() === "") return
    
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: newTodoText,
      completed: false,
    }
    
    setTodos([...todos, newTodo])
    setNewTodoText("")
  }

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
        <h1 className="text-2xl font-bold text-center text-gray-800">Todo List</h1>
      </div>
      <div className="p-6 bg-gray-300">
        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo()
              }
            }}
            className="flex-1 px-4 py-2 border-2 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent !text-gray-800"
          />
          <button 
            onClick={addTodo} 
            className="p-2 bg-[#AC5553] text-white rounded-md hover:opacity-[0.75] focus:outline-none focus:ring-2 focus:ring-[#AC2223] cursor-pointer"
            aria-label="Add task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3 min-h-[200px] max-h-[400px] overflow-y-auto">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-4">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </div>
        
        {todos.length > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            <p>{todos.filter(todo => todo.completed).length} of {todos.length} tasks completed</p>
          </div>
        )}
      </div>
    </div>
  )
}
