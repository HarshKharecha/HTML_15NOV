import React, { useState } from 'react';
import MountMessage from './components/MountMessage';
import DocumentTitle from './components/DocumentTitle';
import DigitalClock from './components/DigitalClock';
import CountdownTimer from './components/CountdownTimer';
import FetchUserData from './components/FetchUserData';
import WindowResize from './components/WindowResize';
import OnlineStatus from './components/OnlineStatus';
import MouseTracker from './components/MouseTracker';
import AutoFocusInput from './components/AutoFocusInput';
import LocalStorageCounter from './components/LocalStorageCounter';
import Stopwatch from './components/Stopwatch';
import SearchLogger from './components/SearchLogger';
import MultipleEffects from './components/MultipleEffects';
import ThemeSwitcher from './components/ThemeSwitcher';
import MeasureHeight from './components/MeasureHeight';
import ResponsiveCardWidth from './components/ResponsiveCardWidth';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';
import LifecycleDemo from './components/LifecycleDemo';
import Dashboard from './pages/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState(20); // Defaults to Task 20 Dashboard

  const renderComponent = () => {
    switch (activeTab) {
      case 1: return <MountMessage />;
      case 2: return <DocumentTitle />;
      case 3: return <DigitalClock />;
      case 4: return <CountdownTimer />;
      case 5: return <FetchUserData />;
      case 6: return <WindowResize />;
      case 7: return <OnlineStatus />;
      case 8: return <MouseTracker />;
      case 9: return <AutoFocusInput />;
      case 10: return <LocalStorageCounter />;
      case 11: return <Stopwatch />;
      case 12: return <SearchLogger />;
      case 13: return <MultipleEffects />;
      case 14: return <ThemeSwitcher />;
      case 15: return <MeasureHeight />;
      case 16: return <ResponsiveCardWidth />;
      case 17: return <ScrollToTop />;
      case 18: return <ProgressBar />;
      case 19: return <LifecycleDemo />;
      case 20: return <Dashboard />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>Lecture 14 Practical Assignment</h1>
        <p>Troopy Stack - React Hooks (`useEffect` & `useLayoutEffect`)</p>
      </header>

      {/* Navigation Buttons for Tasks 1 to 20 */}
      <nav style={styles.navGrid}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((taskNum) => (
          <button
            key={taskNum}
            style={{
              ...styles.tabButton,
              ...(activeTab === taskNum ? styles.activeTabButton : {}),
            }}
            onClick={() => setActiveTab(taskNum)}
          >
            {taskNum === 20 ? 'Task 20 (Dashboard)' : `Task ${taskNum}`}
          </button>
        ))}
      </nav>

      {/* Component Display Area */}
      <main style={styles.displayArea}>
        {renderComponent()}
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
    borderBottom: '2px solid #eaeaea',
    paddingBottom: '12px',
  },
  navGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: '8px',
    marginBottom: '24px',
  },
  tabButton: {
    padding: '8px 12px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: '#f0f2f5',
    border: '1px solid #dcdfe6',
    borderRadius: '6px',
    color: '#333',
    transition: 'all 0.2s ease',
  },
  activeTabButton: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderColor: '#007bff',
    boxShadow: '0 2px 4px rgba(0, 123, 255, 0.3)',
  },
  displayArea: {
    marginTop: '10px',
  },
};

export default App;