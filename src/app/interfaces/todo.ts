import { Task } from './task';

export interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
  tasks: Task[];
  id: number;
}
