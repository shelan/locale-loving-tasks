
import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Todo } from '@/types/todo';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const TodoContainer: React.FC = () => {
  // Get todos from localStorage or start with empty array
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const { toast } = useToast();
  const { t } = useLanguage();

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast({
      description: t('delete'),
    });
  };

  // Clear completed todos
  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
    toast({
      description: t('clearCompleted'),
    });
  };

  return (
    <div className="space-y-6">
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default TodoContainer;
