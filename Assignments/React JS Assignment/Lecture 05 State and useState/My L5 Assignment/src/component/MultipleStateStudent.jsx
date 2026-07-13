import React, { useState } from 'react'

function MultipleStateStudent() {
    const [name, setName] = useState('Genius');
    const [age, setAge] = useState(21);
    const [city, setCity] = useState('New York');

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingCity, setIsEditingCity] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 14: Student Profile (Separate States)</h3>
            <p><strong>
                Name: {isEditingName ? (
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                ) : (name)
                }
                {" | "}
                Age: {age}
                {" | "}
                City: {isEditingCity ? (
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                ) : (city)
                }
            </strong></p>
            <button onClick={() => setIsEditingName(!isEditingName)}>{isEditingName ? 'Save Name' : 'Update Name'}</button>
            <button onClick={() => setAge(age + 1)} style={{ marginLeft: '10px' }}>Update Age</button>
            <button onClick={() => setIsEditingCity(!isEditingCity)} style={{ marginLeft: '10px' }}>{isEditingCity ? 'Save City' : 'Update City'}</button>
        </div>
    )
}

export default MultipleStateStudent