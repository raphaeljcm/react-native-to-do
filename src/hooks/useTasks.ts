import { useState } from 'react';
import { Task } from 'src/types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCheckTask = (id: number) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleAddNewTask = (newTask: string) => {
    if (!newTask) return;

    const newTasks = [
      ...tasks,
      {
        id: Math.random() * 10000,
        title: newTask,
        done: false,
      },
    ];

    setTasks(newTasks);
  };

  return {
    tasks,
    checkTask: handleCheckTask,
    addTask: handleAddNewTask,
    removeTask: handleDeleteTask,
  };
};
