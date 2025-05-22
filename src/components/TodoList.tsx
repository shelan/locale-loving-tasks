
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';
import { useLanguage } from '@/contexts/LanguageContext';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClearCompleted: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onClearCompleted }) => {
  const { t } = useLanguage();
  const hasCompletedTasks = todos.some(todo => todo.completed);

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {t('noTasks')}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">{t('tasks')}</h2>
        {hasCompletedTasks && (
          <button 
            onClick={onClearCompleted}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            {t('clearCompleted')}
          </button>
        )}
      </div>
      
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={onToggle} 
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
