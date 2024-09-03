// import { motion } from "framer-motion"
import styled from "styled-components"
import Footer from "../components/Footer"
// import TypewriterComponent from "typewriter-effect"



function Home() {
  return (
    <div>
    <Landing id = "home">
    <h1 className="homepage-header">Hello! I am Sharon.</h1>
    <h2 className="homepage-subtitle">I am a </h2>
    <div className="container">
      <div className="typed-out">React Enthusiastic & Front-End Passionate <br/> Web Developer </div>
    </div>
    </Landing>
    <Footer />
    </div>
  )
}

export default Home

const Landing = styled.div`
 height: 90vh;
display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`








