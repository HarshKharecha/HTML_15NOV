import React, { useState, useOptimistic, Suspense } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import StatsPanel from '../components/StatsPanel';
import ActivityFeed from '../components/ActivityFeed';
import LoginBanner from './LoginBanner';
import UserManagement from '../components/UserManagement';
import { useAuth } from '../context/AuthContext';
import { dashboardResourcePromise } from '../api/Api';

const styles = {
  container: { padding: '1.5rem', flex: 1, color: '#fff' },
  layoutGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '1.5rem',
    marginTop: '1rem'
  }
};

function Dashboard({ searchQuery }) {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup React 19', description: 'Configure Vite & Dependencies', date: '2026-08-23' }
  ]);
  const [taskFeedbacks, setTaskFeedbacks] = useState({});
  const [userFeedbacks, setUserFeedbacks] = useState({});

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (currentTasks, newTask) => [...currentTasks, { ...newTask, isOptimistic: true }]
  );

  const handleAddTask = async (newTask) => {
    addOptimisticTask(newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleAddTaskFeedback = (taskId, feedbackObj) => {
    setTaskFeedbacks((prev) => ({
      ...prev,
      [taskId]: [...(prev[taskId] || []), feedbackObj]
    }));
  };

  const handleAddUserFeedback = (userId, feedbackObj) => {
    setUserFeedbacks((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), feedbackObj]
    }));
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard Overview</h2>
      <LoginBanner />

      <Suspense fallback={<div style={{ color: '#94a3b8' }}>Loading System Stats...</div>}>
        <StatsPanel resourcePromise={dashboardResourcePromise} totalTasks={optimisticTasks.length} />
      </Suspense>

      <div style={styles.layoutGrid}>
        <div>
          {user?.role === 'admin' ? (
            <TaskForm onAddTask={handleAddTask} />
          ) : (
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#1e293b',
                borderRadius: '6px',
                marginBottom: '1rem',
                color: '#94a3b8'
              }}
            >
              {user
                ? 'Logged in as User (Task creation reserved for Admins)'
                : 'Login to create tasks or add feedback'}
            </div>
          )}

          <TaskList
            tasks={optimisticTasks}
            searchQuery={searchQuery}
            taskFeedbacks={taskFeedbacks}
            onAddTaskFeedback={handleAddTaskFeedback}
            canAddFeedback={Boolean(user)}
          />

          {user?.role === 'admin' && (
            <UserManagement
              userFeedbacks={userFeedbacks}
              onAddUserFeedback={handleAddUserFeedback}
            />
          )}
        </div>

        <div>
          <ActivityFeed tasks={optimisticTasks} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;