import React, { useState } from 'react'

function AgeUpdater() {
    const [age, setAge] = useState(18);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Task 10: Age Updater</h3>
      <p>Age: <strong>{age}</strong></p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  )
}

export default AgeUpdater