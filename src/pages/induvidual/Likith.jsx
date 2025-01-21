import React from 'react'
import Hero from './Hero'
import About from './About'
import likithImage from '../../components/founder/likith1.png'

function Likith() {
  return (
    <section className="container-fluid p-0">
        <Hero title="LIKITH RAJ" subtitle="Likith Raj is a visionary storyteller whose journey into filmmaking is as inspiring as the stories he creates. Despite earning an engineering degree, his passion for filmmaking drove him to explore the world of visual storytelling" image={likithImage}/>
        <About p1="Likith Raj is a visionary storyteller whose journey into filmmaking is as inspiring as the stories he creates. Despite earning an engineering degree, his passion for filmmaking drove him to explore the world of visual storytelling, where he quickly made a name for himself by winning numerous short film competitions." p2=' His career began with a coveted role in the direction team for the acclaimed movie Mayabazar under PRK Productions, where he gained invaluable experience in the art of filmmaking. He went on to work as an associate editor at a leading studio, all while freelancing as a cinematographer, mastering the technical and creative aspects of the craft. Over the years, Likith has established himself as a powerhouse in end-to-end content creation, seamlessly managing everything from preproduction to postproduction for some of the most renowned brands.' p3=" His expertise, creative flair, and eye for detail make him a true force in the industry, and as a co-founder of this venture, he continues to push the boundaries of impactful storytelling."/>
    </section>
  )
}

export default Likith