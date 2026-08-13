import React, { useState, useTransition } from 'react'

function Prectic() {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()

  function data() {
    startTransition(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const newList = []
        for (let index = 0; index < 5; index++) {
          newList.push(`${inputValue} - ${index + 1}`)
        }
        setItems(newList)
        console.log('Submit action completed!')
      })
  }
  return (
    <>
      <div>Prectic</div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something..." />
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={data}>Submit</button>
    </>
  )
}

export default Prectic