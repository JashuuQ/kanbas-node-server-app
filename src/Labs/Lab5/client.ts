import axios from "axios";
import { Todo } from "./types";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// Http client
export const fetchWelcomeMessage = async () => {
  const response = await axios.get<string>(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

// Assignment
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// Todos
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(TODOS_API);
  return response.data;
};

export const createTodo = async () => {
  const response = await axios.get<Todo[]>(`${TODOS_API}/create`);
  return response.data;
};

export const postTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axios.post<Todo>(`${TODOS_API}`, todo);
  return response.data;
};

export const removeTodo = async (todo: Todo): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axios.put<Todo>(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};



