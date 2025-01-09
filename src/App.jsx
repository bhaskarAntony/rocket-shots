import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom'
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
import ContactPage from './pages/contactPage/ContactPage'
import Gallery from './pages/Gallery/Gallery'

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
 
  
  return (
   <section className='overflow-hidden dark2'>
    <BrowserRouter>
   {/* {
    locatio
   } */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/content/creation' element={<ContentCreation/>}/>
        <Route path='/web/development' element={<Development/>}/>
        <Route path='/branding' element={<Branding/>}/>
        <Route path='/graphic-designing' element={<Graphics/>}/>
        <Route path='/marketing' element={<Marketing/>}/>
        <Route path='/ui-ux' element={<UIUX/>}/>
        <Route path='/contact-us' element={<ContactPage/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        {/* <Route path='/social_reech' element={<Social/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
   </section>
  )
}

export default App