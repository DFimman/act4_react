import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is a To do List React Application</h1>
      <div className="App">
        {/* <TodoComponent /> */} This is todo component
        <div>
        {/* <Socialcomponent/> */} This is Social components
        </div>
      </div>
    </>
  )
}

export default App
