import React from 'react'
import Hero from './Hero'
import About from './About'
import likithImage from '../../components/founder/likith1.png'

function Likith() {
  return (
    <section className="container-fluid p-0">
        <Hero title="LIKITH RAJ" subtitle="Meet Likith Raj, a luminary whose cinematic journey is a testament to boundless creativity and unmatched dedication. From his humble beginnings crafting short films to earning national and state-level accolades, Likith Raj's journey is an inspiring testament to the power of dedication and creativity." image={likithImage}/>
        <About p1="His remarkable journey took an exciting turn when Likith Raj became an integral part of the direction team for the blockbuster movie 'Mayabazar.' This opportunity allowed him to collaborate with seasoned professionals and contribute his unique perspective to the creative process.
" p2=" Likith Raj's multifaceted talent led him to explore various roles within the film industry. He seamlessly transitioned into the roles of chief editor, video producer, and cinematographer, showcasing his versatility and adaptability. His meticulous approach and creative finesse added depth and richness to every project he touched.
" p3="Likith’s  artistic prowess extended beyond traditional cinema as he ventured into the realm of advertising. As a writer and director, he crafted captivating advertisements that seamlessly merged creativity with brand messaging. His ability to distill complex ideas into succinct visual stories set him apart, leaving an enduring impact on audiences and clients alike."/>
    </section>
  )
}

export default Likith