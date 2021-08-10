import { Task } from './task';

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
  tasks: Task[];
  id: number;
}
