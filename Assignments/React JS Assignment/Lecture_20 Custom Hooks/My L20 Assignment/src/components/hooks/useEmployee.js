import { useState } from 'react';

const initialEmployees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', salary: 85000 },
  { id: 2, name: 'Bob Smith', department: 'HR', salary: 60000 },
  { id: 3, name: 'Charlie Davis', department: 'Marketing', salary: 65000 },
  { id: 4, name: 'Diana Prince', department: 'Engineering', salary: 95000 },
];

function useEmployee() {
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (newEmp) => {
    const employeeWithId = {
      ...newEmp,
      id: Date.now(),
      salary: Number(newEmp.salary) || 50000,
    };
    setEmployees((prev) => [...prev, employeeWithId]);
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return { employees, setEmployees, addEmployee, deleteEmployee };
}

export default useEmployee;