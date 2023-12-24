import './App.css'
import StickyNavbar2 from './components/header/StickyNavbar2'
import Head from './components/sections/Head'
import Features from './components/sections/Features'
import Contents from './components/sections/Contents'
import Gallery from './components/sections/Gallery'
import Partners from './components/sections/Partners'
import Testimonials from './components/sections/Testimonials'
import Fonts from './components/sections/Fonts'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <StickyNavbar2/>
      </header>
      <main className='text-white pt-16 lg:pt-28'>
        <Head/>
        <Features/>
        <Contents/>
        <Gallery/>
        <Partners/>
        <Testimonials/>
        <Fonts/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
