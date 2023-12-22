import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/header/StickyNavbar'
import StickyNavbar2 from './components/header/StickyNavbar2'
import Flip from 'react-reveal/Flip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar/>
      <StickyNavbar2/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        <Flip left cascade>
          Vite + React
        </Flip>
      </h1>
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
      <h1 className="mt-96 mb-20">
        <Flip left cascade>
          Vite + React
        </Flip>
      </h1>
    </>
  )
}

export default App
