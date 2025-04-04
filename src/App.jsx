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
import Facebbok from './pages/social/Facebbok'
import WhatsApp from './pages/social/Whatsapp'
import Instagram from './pages/social/Instagram'
import Social from './pages/social/Social'
import Engagement from './pages/engagement/Engagement'
import Ranav from './pages/induvidual/Ranav'
import Likith from './pages/induvidual/Likith'
import Stills from './pages/stilles/Stills'
import Vikas from './pages/induvidual/Vikas'
import Shashank from './pages/induvidual/Shashank'
import Abhishek from './pages/induvidual/Abhishek'
import Govindh from './pages/induvidual/Govind'
import Sumanth from './pages/induvidual/Sumanth'
import Ajay from './pages/induvidual/Ajay'
import NotFound from './components/NotFound'

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
        <Route path='/facebook' element={<Facebbok/>}/>
        <Route path='/whatsapp' element={<WhatsApp/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
        <Route path='/social' element={<Social/>}/>
        <Route path='/engagement' element={<Engagement/>}/>
        <Route path='/portfolio/ranav' element={<Ranav/>}/>
        <Route path='/portfolio/likith' element={<Likith/>}/>
        <Route path='/portfolio/vikas' element={<Vikas/>}/>
        <Route path='/portfolio/shashank' element={<Shashank/>}/>
        <Route path='/portfolio/abhishek' element={<Abhishek/>}/>
        <Route path='/portfolio/govindhraj' element={<Govindh/>}/>
        <Route path='/portfolio/sumanth' element={<Sumanth/>}/>
        <Route path='/portfolio/ajay' element={<Ajay/>}/>
        <Route path='/stills' element={<Stills/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </section>
  )
}

export default App