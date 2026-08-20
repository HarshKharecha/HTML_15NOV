import React from 'react';
import Header from './components/Header';
import useLocalStorage from './components/hooks/useLocalStorage';
import Sidebar from './components/Sidebar';
import useWindowSize from './components/hooks/useWindowSize';
import useSearch from './components/hooks/useSearch';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Navigate, Route, Routes } from 'react-router-dom';
import EmployeeStats from './components/EmployeeStats';
import EmployeeForm from './components/EmployeeForm';
import useEmployee from './components/hooks/useEmployee';
import useFilter from './components/hooks/useFilter';
import useDocumentTitle from './components/hooks/useDocumentTitle';
import EmployeeList from './components/EmployeeList';
import useFetch from './components/hooks/useFetch';
import useCounter from './components/hooks/useCounter';
import Footer from './components/Footer';


function Dashboard() {
    // 1. Theme State (Local Storage Hook)
    const [theme, setTheme] = useLocalStorage('app-theme', 'light');

    // 2. Custom Hooks Integration
    const { employees, addEmployee, deleteEmployee } = useEmployee();
    const { searchTerm, handleSearchChange } = useSearch('');
    const filteredEmployees = useFilter(employees, searchTerm, 'name');

    const windowSize = useWindowSize();
    const { count, increment, decrement, reset } = useCounter(0);

    // Dynamic Title Hook
    useDocumentTitle(`Dashboard (${filteredEmployees.length} Emps)`);

    // API Data Fetching Hook
    const { data: apiUsers, loading: apiLoading, error: apiError } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    const isDark = theme === 'dark';
    const isMobile = windowSize.width < 768;

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: isDark ? '#111827' : '#f9fafb',
            color: isDark ? '#f9fafb' : '#111827',
            fontFamily: 'sans-serif',
        },
        body: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flex: 1,
        },
        main: {
            flex: 1,
            padding: '1.5rem',
        },
        topBar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1rem',
        },
        searchInput: {
            padding: '0.5rem',
            minWidth: '200px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            fontSize: '0.95rem',
            outline: 'none',
        },
        sectionCard: {
            padding: '1rem',
            marginBottom: '1.5rem',
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },
        counterButton: {
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        },
    };

    return (
        <div style={styles.container}>
            <Header theme={theme} />
            <div style={styles.body}>
                <Sidebar theme={theme} windowSize={windowSize} />
                <main style={styles.main}>
                    <div style={styles.topBar}>
                        <input
                            style={styles.searchInput}
                            type="text"
                            placeholder="Search employees..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <ThemeSwitcher theme={theme} setTheme={setTheme} />
                    </div>

                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />

                        <Route path="/dashboard" element={
                            <>
                                <div style={styles.sectionCard}>
                                    <p style={{ margin: 0 }}>
                                        📏 <strong>Window Dimensions:</strong> {windowSize.width}px x {windowSize.height}px
                                    </p>
                                </div>
                                <EmployeeStats employees={employees} theme={theme} />

                                <EmployeeForm onAdd={addEmployee} theme={theme} />

                                <h2>Local Employee Directory</h2>
                                <EmployeeList
                                    employees={filteredEmployees}
                                    onDelete={deleteEmployee}
                                    theme={theme}
                                />

                                <hr style={{ margin: '2rem 0' }} />

                                <h2>API Employees (useFetch Demo)</h2>
                                {apiLoading && <p>Loading external users...</p>}
                                {apiError && <p style={{ color: 'red' }}>Error: {apiError}</p>}
                                {apiUsers && (
                                    <EmployeeList
                                        employees={apiUsers.map((u) => ({
                                            id: u.id,
                                            name: u.name,
                                            department: u.company.name,
                                            salary: 70000,
                                        }))}
                                        theme={theme}
                                    />
                                )}

                                <hr style={{ margin: '2rem 0' }} />

                                <div style={styles.sectionCard}>
                                    <h3>Counter Hook Demo</h3>
                                    <p>Count: {count}</p>
                                    <button style={styles.counterButton} onClick={increment}>+</button>
                                    <button style={{ ...styles.counterButton, marginLeft: '0.5rem', background: '#ef4444' }} onClick={decrement}>-</button>
                                    <button style={{ ...styles.counterButton, marginLeft: '0.5rem', background: '#10b981' }} onClick={reset}>Reset</button>
                                </div>
                            </>
                        } />

                        <Route path="/employees" element={
                            <>
                                <EmployeeForm onAdd={addEmployee} theme={theme} />

                                <h2>Local Employee Directory</h2>
                                <EmployeeList
                                    employees={filteredEmployees}
                                    onDelete={deleteEmployee}
                                    theme={theme}
                                />

                                <hr style={{ margin: '2rem 0' }} />

                                <h2>API Employees (useFetch Demo)</h2>
                                {apiLoading && <p>Loading external users...</p>}
                                {apiError && <p style={{ color: 'red' }}>Error: {apiError}</p>}
                                {apiUsers && (
                                    <EmployeeList
                                        employees={apiUsers.map((u) => ({
                                            id: u.id,
                                            name: u.name,
                                            department: u.company.name,
                                            salary: 70000,
                                        }))}
                                        theme={theme}
                                    />
                                )}
                            </>
                        } />

                        <Route path="/settings" element={
                            <div style={styles.sectionCard}>
                                <h2>⚙️ Settings</h2>
                                <p>This feature is part of our future plan. Stay tuned!</p>
                            </div>
                        } />
                    </Routes>
                </main>
            </div>
            <Footer theme={theme} />
        </div >
    );
}

export default Dashboard;