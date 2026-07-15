import React from 'react'

function StudentList() {
    const students = ['Ganesh', 'Genius', 'Charlie', 'David', 'Jackson'];

    return (
        <div>
            <h2>Student Names:</h2>
            {students.map((name, index) => (
                <h3 key={index}>{name}</h3>
            ))}
        </div>
    )
}

export default StudentList