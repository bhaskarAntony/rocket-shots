import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import './App.css'
import Aos from 'aos'
import ContentCreation from './pages/services/ContentCreation'
import Development from './pages/services/Development'
import Branding from './pages/services/Branding'
import Graphics from './pages/services/Graphics'
import Marketing from './pages/services/Marketing'
import UIUX from './pages/services/UIUX'
import Footer from './components/footer/Footer'
import About from './pages/about/About'

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
   <section className='overflow-hidden dark2'>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/content/creation' element={<ContentCreation/>}/>
        <Route path='/web/development' element={<Development/>}/>
        <Route path='/branding' element={<Branding/>}/>
        <Route path='/graphic-designing' element={<Graphics/>}/>
        <Route path='/marketing' element={<Marketing/>}/>
        <Route path='/ui-ux' element={<UIUX/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </section>
  )
}

export default App