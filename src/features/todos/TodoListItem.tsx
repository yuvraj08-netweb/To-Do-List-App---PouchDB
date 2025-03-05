import type { Todo } from "./TodoList"

interface TodoListItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoListItem({ todo, onToggle, onDelete }: TodoListItemProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-md border ${
        todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"
      } transition-colors group hover:shadow-sm`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Custom checkbox */}
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={onToggle}
            className="absolute opacity-0 w-0 h-0"
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`flex items-center justify-center w-5 h-5 rounded border cursor-pointer ${
              todo.completed ? "bg-blue-500 border-blue-500" : "border-gray-300 hover:border-blue-500"
            }`}
          >
            {todo.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </div>

        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-sm font-medium cursor-pointer flex-1 truncate ${
            todo.completed ? "text-gray-500 line-through" : "text-gray-800"
          }`}
        >
          {todo.text}
        </label>
      </div>

      <button
        onClick={onDelete}
        className="p-1.5 text-red-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 focus:outline-none focus:bg-red-50 focus:opacity-100"
        aria-label="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

