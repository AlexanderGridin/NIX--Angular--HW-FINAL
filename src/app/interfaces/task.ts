export interface Task {
  title: string;
  isCompleted: boolean;
  id?: number; // фикс, чтобы не падало приложение. Убрать!!
}
