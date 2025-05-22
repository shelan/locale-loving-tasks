
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Todo } from '@/types/todo';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const { t } = useLanguage();

  return (
    <div 
      className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm mb-2 animate-fade-in border border-gray-100 group hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <Checkbox 
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="h-5 w-5 border-2 border-todo-primary"
        />
        <label 
          htmlFor={`todo-${todo.id}`}
          className={`text-lg cursor-pointer transition-all ${
            todo.completed 
              ? 'text-gray-400 line-through' 
              : 'text-gray-700'
          }`}
        >
          {todo.text}
        </label>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        title={t('delete')}
      >
        <X className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
};

export default TodoItem;
