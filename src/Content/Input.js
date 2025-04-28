import React, { useState } from 'react'

function Input() {
    const [name, setName] = useState('')
    const handle = (e) => {
      setName (e.target.value)
    }
  return (
    <div>
      <h1>Hello {name}</h1>
      <form onSubmit={handle}>
        <label>
          Enter your name:
          <br></br>
          <input type='text' name='name' value={name} onChange={handle} placeholder='Enter your name...'></input>
        </label>
      </form>
    </div>

  )
}

export default Input;