import React, { useState } from 'react'

function StudentName() {
    // const [count, setName] = useState(0); // logic 1
    const [isGenius, setIsGenius] = useState(false); // logic 2
    const name = isGenius ? 'Genius' : 'Ganesh'; // logic 2

    // logic 1
    // if (count === 0) {
    //     name = 'Ganesh'
    // } else {
    //     name = 'Genius'
    //     console.log("Looping!");
    // }

    // if (count === 2) {
    //     setName(0);
    // }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 6: Student Name</h3>
            <p>Current Name: <strong>{name}</strong></p>
            <button onClick={() => setIsGenius(!isGenius)}>Change Name</button> {/* setName(count + 1), setIsGenius(!isGenius) */}
        </div>
    )
}

export default StudentName