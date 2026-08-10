import React, { createContext, useState, useRef } from 'react';

export const StudentContext = createContext();

const initialStudents = [
  { id: 1, name: 'Emma Watson', email: 'emma@university.edu', course: 'Computer Science' },
  { id: 2, name: 'Liam Neeson', email: 'liam@university.edu', course: 'Data Science' },
  { id: 3, name: 'Sophia Loren', email: 'sophia@university.edu', course: 'Cybersecurity' },
  { id: 4, name: 'Noah Centineo', email: 'noah@university.edu', course: 'Web Development' },
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // useRef to store total submission count without unnecessary re-renders on counter logic
  const submissionCountRef = useRef(0);

  const addStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents((prev) => [studentWithId, ...prev]);
    submissionCountRef.current += 1;
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        selectedStudent,
        setSelectedStudent,
        searchQuery,
        setSearchQuery,
        addStudent,
        submissionCount: submissionCountRef.current,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;