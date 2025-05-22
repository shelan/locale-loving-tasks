
export type LanguageCode = 'en' | 'sv' | 'uk';

export type TranslationKeys = 
  | 'appTitle'
  | 'addTask'
  | 'inputPlaceholder'
  | 'delete'
  | 'completed'
  | 'noTasks'
  | 'tasks'
  | 'clear'
  | 'clearCompleted';

export const translations: Record<LanguageCode, Record<TranslationKeys, string>> = {
  en: {
    appTitle: 'My Multilingual Todo List',
    addTask: 'Add Task',
    inputPlaceholder: 'Enter new task...',
    delete: 'Delete',
    completed: 'Completed',
    noTasks: 'No tasks yet. Add a new one!',
    tasks: 'Tasks',
    clear: 'Clear All',
    clearCompleted: 'Clear Completed'
  },
  sv: {
    appTitle: 'Min flerspråkiga att göra-lista',
    addTask: 'Lägg till uppgift',
    inputPlaceholder: 'Ange ny uppgift...',
    delete: 'Ta bort',
    completed: 'Slutförd',
    noTasks: 'Inga uppgifter ännu. Lägg till en ny!',
    tasks: 'Uppgifter',
    clear: 'Rensa alla',
    clearCompleted: 'Rensa slutförda'
  },
  uk: {
    appTitle: 'Мій багатомовний список завдань',
    addTask: 'Додати завдання',
    inputPlaceholder: 'Введіть нове завдання...',
    delete: 'Видалити',
    completed: 'Виконано',
    noTasks: 'Поки що немає завдань. Додайте нове!',
    tasks: 'Завдання',
    clear: 'Очистити все',
    clearCompleted: 'Очистити виконані'
  }
};

export const languageNames: Record<LanguageCode, string> = {
  en: 'English',
  sv: 'Svenska',
  uk: 'Українська'
};
