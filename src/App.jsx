import { useState } from 'react'
import './App.css'
import StickyNavbar2 from './components/header/StickyNavbar2'
import Head from './components/sections/Head'
import Features from './components/sections/Features'
import Contents from './components/sections/Contents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='sticky top-0 z-50'>
        <StickyNavbar2/>
      </header>
      <main className='text-white'>
        <Head/>
        <Features/>
        <Contents/>
      </main>
    </>
  )
}

export default App
