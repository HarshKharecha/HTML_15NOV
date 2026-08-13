import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import StatisticsPanel from './components/StatisticsPanel';
import SearchAndFilter from './components/SearchAndFilter';
import ActivityLog from './components/ActivityLog';
import { taskReducer, initialState } from './reducers/taskReducer';

function App() {
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    },
    body: {
      display: 'flex',
      flex: 1,
    },
    mainContent: {
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      overflowX: 'hidden',
    },
    formsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '12px',
    },
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Derived filtered state calculation
  const filteredTasks = state.tasks.filter((task) => {
    const matchesFilter =
      state.filter === 'ALL'
        ? true
        : state.filter === 'COMPLETED'
          ? task.completed
          : !task.completed;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div style={styles.layout}>
      <Header />
      <div style={styles.body}>
        <Sidebar dispatch={dispatch} totalTasks={state.tasks.length} />
        <main style={styles.mainContent}>
          <StatisticsPanel tasks={state.tasks} />

          <div style={styles.formsGrid}>
            <TaskForm dispatch={dispatch} formTitle="Quick Add Form #1" />
            <TaskForm dispatch={dispatch} formTitle="Secondary Form #2 (useId Validation)" />
          </div>

          <SearchAndFilter dispatch={dispatch} currentFilter={state.filter} />

          <TaskList tasks={filteredTasks} dispatch={dispatch} />

          <ActivityLog logs={state.activityLog} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;