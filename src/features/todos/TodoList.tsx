import { useEffect, useState } from "react";
import { Button, Input, List } from "antd";
import { ITodo } from "../../lib/pouchdb";
import { useTodoStore } from "../../state/useTodoStore";

const TodoList = () => {
  const { todos, fetchTodos, addNewTodo, toggleTodo, removeTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState("");

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // Handle adding a new todo
  const handleAddTodo = async () => {
    if (inputValue.trim()) {
      await addNewTodo(inputValue.trim());
      setInputValue(""); // Clear input after adding
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-3">My TODO List</h2>
      
      <div className="flex gap-2 mb-4">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </div>

      <List
        bordered
        dataSource={todos}
        renderItem={(todo: ITodo) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => toggleTodo(todo._id)}>
                {todo.completed ? "Undo" : "Complete"}
              </Button>,
              <Button type="link" danger onClick={() => removeTodo(todo._id)}>
                Delete
              </Button>,
            ]}
          >
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
