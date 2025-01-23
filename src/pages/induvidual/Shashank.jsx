import React from 'react'
import vikasImage from '../../pages/about/1000191944-removebg-preview.png'
import Hero from './Hero'
import About from './About'
function Shashank () {
  return (
    <section className="container-fluid p-0">
        <Hero title="Shashank Udupa" subtitle="Shashank is a film promoter & social media marketing specialist with a background in commerce, he transitioned into the entertainment industry, leveraging his creative expertise to promote films across diverse platforms. He crafts innovative campaigns to captivate audiences and movie enthusiasts alike. Additionally, he excels in social media marketing, elevating film banners to new heights." image={vikasImage}/>
        <About p1="Shashank is a film promoter & social media marketing specialist with a background in commerce, he transitioned into the entertainment industry, leveraging his creative expertise to promote films across diverse platforms. He crafts innovative campaigns to captivate audiences and movie enthusiasts alike. Additionally, he excels in social media marketing, elevating film banners to new heights."/>
        </section>
  )
}

export default Shashank 