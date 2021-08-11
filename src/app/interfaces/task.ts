export interface Task {
  title: string;
  completed: boolean;
  id?: number; // фикс, чтобы не падало приложение. Убрать!!
}
