import React from 'react'
import vikasImage from '../../components/founder/vikas.png'
import Hero from './Hero'
import About from './About'
function Vikas() {
  return (
    <section className="container-fluid p-0">
        <Hero title="VIKAS ANGADI" subtitle="Vikas Angadi, a B.Tech graduate in ISE from Presidency University, Bengaluru, blends his passion for cinema with unmatched expertise in production and marketing. With a year of dedication at Rocketshots, he now leads as Managing Director, building strong networks and driving innovative strategies. Rooted in Bengaluru, Vikas brings a fresh perspective to digital production and marketing excellence." image={vikasImage}/>
        <About p1="Vikas Angadi, a B.Tech graduate in ISE from Presidency University, Bengaluru, blends his passion for cinema with unmatched expertise in production and marketing. With a year of dedication at Rocketshots, he now leads as Managing Director, building strong networks and driving innovative strategies. Rooted in Bengaluru, Vikas brings a fresh perspective to digital production and marketing excellence."/>
        </section>
  )
}

export default Vikas