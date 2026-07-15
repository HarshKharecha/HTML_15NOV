import React from 'react'

function FruitList() {
    const fruits = ['Mango', 'Watermelon', 'Guava', 'Grapes', 'Custard Apple'];

    return (
        <div>
            <h2>Favorite Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default FruitList