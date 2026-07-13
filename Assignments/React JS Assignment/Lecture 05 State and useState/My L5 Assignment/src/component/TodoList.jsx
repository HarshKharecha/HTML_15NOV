import React, { useState } from 'react';

function TodoList() {
    const styles = {
        container: {
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            margin: '10px',
            maxWidth: '800px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }
    }

    const [students, setStudents] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Track which student is currently being edited and its temporary text
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    // Handle adding a new student
    const handleAdd = (e) => {
        e.preventDefault(); // Prevents page refresh on form submission
        if (inputValue && inputValue.trim() !== '') {
            const newStudent = {
                id: Date.now(), // Unique ID for React keys
                name: inputValue.trim()
            };
            setStudents([...students, newStudent]);
            setInputValue(''); // Clear input
        }
    };

    // Handle deleting a student
    const handleDelete = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    // Turn on Edit mode for a specific student
    const startEdit = (student) => {
        setEditingId(student.id);
        setEditText(student.name);
    };

    // Save the edited student name
    const saveEdit = (id) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, name: editText } : student
        ));
        setEditingId(null); // Exit edit mode
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        /* The container class now controls the light/dark mode locally */
        <div className={isDarkMode ? 'dark todo-wrapper' : 'todo-wrapper'} style={styles.container}>
            {/* Scoped CSS Logic */}
            <style>{`
                .todo-wrapper {
                    --bg: #ffffff;
                    --text: #111111;
                    --card: #f0f0f0;
                    --btn: #ff9800;
                    --bgsado: rgb(197, 133, 38);
                    --input-bg: #ffffff;
                    --input-text: #1f2937;
                    --input-border: #d1d5db;
                    --input-focus: #3b82f6;
                    
                    color: var(--text);
                    background: var(--bg);
                    transition: .3s;
                    position: relative;
                }
                .todo-wrapper.dark {
                    --bg: #121212;
                    --text: #ffffff;
                    --card: #1f1f1f;
                    --btn: #ff9800;
                    --bgsado: rgb(38, 102, 197);
                    --input-bg: #1e293b;
                    --input-text: #f8fafc;
                    --input-border: #334155;
                    --input-focus: #60a5fa;
                }
                .container {
                    width: 100%;
                    max-width: 350px;
                    margin: 0 auto;
                    text-align: center;
                    background: var(--card);
                    box-shadow: 0 10px 40px -10px var(--bgsado);
                    border-radius: 20px;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 0;
                    gap: 5px;
                }
                .container input {
                    border: 2px solid var(--input-border);
                    border-radius: 5px;
                    color: var(--input-text);
                    background: var(--input-bg);
                    padding: 5px 9px;
                    transition: all .25s ease;
                }
                .container input:focus {
                    outline: none;
                    border-color: var(--input-focus);
                    box-shadow: 0 0 0 4px color-mix(in srgb, var(--input-focus) 20%, transparent);
                }
                .container button {
                    color: rgb(255, 255, 255);
                    background: rgb(192, 109, 15);
                    border: none;
                    border-radius: 5px;
                    padding: 5px 9px;
                    cursor: pointer;
                }
                .row ul {
                    margin: 0;
                    padding: 0;
                }
                .row li {
                    list-style: none;
                    margin: 0;
                }
                #theme-toggle {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                }
                #Deco {
                    background-color: rgb(192, 50, 15);
                }
            `}</style>

            <h3>Task 18: Simple Todo List</h3>

            {/* Theme Toggle Button */}
            <button type="button" id="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className="container">
                <h1>Student's List</h1>

                <form onSubmit={handleAdd}>
                    <input
                        type="text"
                        id="in"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" style={{ marginLeft: '5px' }}>Add</button>

                    {/* Output container */}
                    {students.length > 0 && (
                        <div id="out" style={{ marginTop: '15px' }}>
                            {students.map((student) => (
                                <div className="row" key={student.id}>

                                    {/* Conditional rendering based on edit state */}
                                    {editingId === student.id ? (
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            autoFocus
                                        />
                                    ) : (
                                        <ul>
                                            <li>{student.name}</li>
                                        </ul>
                                    )}

                                    {/* Edit / Save Button Toggle */}
                                    {editingId === student.id ? (
                                        <button type="button" onClick={() => saveEdit(student.id)}>Save</button>
                                    ) : (
                                        <button type="button" onClick={() => startEdit(student)}>Edit</button>
                                    )}

                                    <button type="button" id="Deco" onClick={() => handleDelete(student.id)}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default TodoList;