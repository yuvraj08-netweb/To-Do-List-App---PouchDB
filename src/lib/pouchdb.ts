import * as PouchDB from 'pouchdb';
import PouchDBFind from "pouchdb-find";
// Apply plugins if needed
PouchDB.plugin(PouchDBFind);

// Create a local PouchDB database for todos
export const todoDB = new PouchDB("todos");

// Define the interface for a TODO item
export interface ITodo {
  _id: string; // Unique ID for PouchDB documents
  title: string;
  completed: boolean;
  createdAt: number; // Timestamp for sorting
}

// Initialize PouchDB for todos
const db = new PouchDB<ITodo>("todos-db");

// Function to add a todo
export const addTodo = async (todo: ITodo) => {
  await db.put(todo);
};

// Function to fetch all todos
export const getTodos = async (): Promise<ITodo[]> => {
  const result = await db.allDocs({ include_docs: true });
  return result.rows.map(row => row.doc as ITodo);
};

// Function to update a todo
export const updateTodo = async (todo: ITodo) => {
  const existingDoc = await db.get(todo._id);
  await db.put({ ...existingDoc, ...todo });
};

// Function to delete a todo
export const deleteTodo = async (id: string) => {
  const doc = await db.get(id);
  await db.remove(doc);
};

// Export the database instance for direct access if needed
export default db;
