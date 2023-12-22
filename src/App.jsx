import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/header/StickyNavbar'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Bounce left>
        <h1>Vite + React</h1>
      </Bounce>      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Fade right>
        <h1 className="mt-96 mb-20">Vite + React</h1>
      </Fade> 
    </>
  )
}

export default App
