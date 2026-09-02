import { useState, useOptimistic } from "react";

export function useDashboardData() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React 19 Assignment",
      description: "Implement useActionState and useOptimistic",
      date: "2026-08-23",
      completed: false,
    },
  ]);

  const [activities, setActivities] = useState([
    "Dashboard initial state loaded.",
  ]);

  // Handle immediate UI feedback with optimistic updates
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (currentTasks, newTask) => [
      { ...newTask, isOptimistic: true },
      ...currentTasks,
    ]
  );

  const handleAddTask = async (newTask) => {
    // 1. Immediately apply optimistic task update
    addOptimisticTask(newTask);

    // 2. Perform background task addition
    try {
      setTasks((prev) => [newTask, ...prev]);
      setActivities((prev) => [
        `Added task: "${newTask.title}"`,
        ...prev,
      ]);
    } catch {
      // Reverts automatically if state setter fails
    }
  };

  return {
    tasks: optimisticTasks,
    activities,
    handleAddTask,
  };
}