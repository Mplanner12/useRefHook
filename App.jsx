// useRef use cases
// 1
    import React, { useState, useRef, useEffect } from 'react'
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [name, setName] = useState("")
  const previousRendered = useRef(1)
  useEffect(() => {
    previousRendered.current = previousRendered.current + 1
  })

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>the above was render {previousRendered.current} times</h1>
    </>
  )
}

export default App

// 2
import React, { useState, useRef, useEffect } from 'react'
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [name, setName] = useState("")
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1><button onClick={focus}>Focus</button></h1>
    </>
  )
}

export default App

// 3
import React, { useState, useRef, useEffect } from 'react'
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [name, setName] = useState("")
  const previousName = useRef("")
  useEffect(() => {
    previousName.current = name
  })

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name used to be {previousName.current}</h1>
    </>
  )
}

export default App
