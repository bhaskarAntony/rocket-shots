import React from 'react'
import Hero from './Hero'
import ranavImage from '../../components/founder/raks.png'
import About from './About'

function Ranav() {
  return (
    <section className="container-fluid p-0">
        <Hero title="RANAV KSHIRSAGR" subtitle="Ranav kshirsagr is a remarkable individual with a diverse range of talents and a strong determination to follow his passions. " image={ranavImage}/>
        <About p1="Ranav Kshirsagr is a remarkable individual with a diverse range of talents and a strong determination to follow his passions. Despite starting his journey with a career in Mechanical Engineering and even securing a position in the Indian Navy as a UES pilot, he chose to change his path to pursue his true passion for cinema. This bold decision to follow his heart and leave behind a secure career showcases his dedication to his dreams." p2='His involvement in the film industry has been extensive and impressive. Working as an Associate Director for well-known names like Sadhukokila and Nandakishore has given him valuable experience and insight into the industry. His acting career began on a high note, as he had the honor of sharing the screen with Puneethrajkumar in "Yuvarathnaa," playing a role that marked his debut as an actor. He has also appeared in other notable movies such as "Ranna" and "Rangrover," and has exciting projects on the horizon, including "Royal," a film directed by Upendra sir, and "Bageera," starring Srimurali.' p3="Ranav ambition to elevate the Kannada film industry to international recognition, specifically aiming to bring an Oscar home, is a testament to his unwavering belief in his dreams. His dedication to working hard and his commitment to the art of cinema reflect his passion for the craft. By setting his sights on such a prestigious goal, Ranav aims not only to achieve personal success but also to bring pride to his state and his country." p4="His story serves as an inspiration to those who are hesitant to pursue their true passions, and his journey highlights the importance of believing in oneself and persevering in the face of challenges. Ranav Kshirsagr dedication to his dreams and his multifaceted talents make him a significant and promising figure in the world of cinema and beyond."/>
    </section>
  )
}

export default Ranav