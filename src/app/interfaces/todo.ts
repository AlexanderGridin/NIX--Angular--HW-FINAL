import { TodoSubTask } from "./todo-sub-task";

export interface Todo {
  title: string,
  description?: string,
  subTask?: TodoSubTask[],
}
