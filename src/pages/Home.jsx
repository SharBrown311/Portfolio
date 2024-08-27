import { motion } from "framer-motion"
import styled from "styled-components"
import TypewriterComponent from "typewriter-effect"



function Home() {
  return (
    <div>
    <Landing id = "home">

    <Title initial = {{opacity: 0}} animate = {{opacity: 1}}>
    Welcome to my Portfolio
    </Title>     
    <Subtitle initial = {{y: 20}} animate = {{y: 0}}>
   Front-End Developer
    </Subtitle>
    </Landing>
    

    <div>
 
      <TypewriterComponent
      options={{
        strings: ['Welcome to My Portfolio', 'Front-End Developer', 'React Enthusiast'],
        autoStart: true,
        loop: false,
      }}
    />
    </div>
    </div>
  )
}

export default Home

const Landing = styled.div`
 height: 100vh;
display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;
background: linear-gradient(45deg, #6e45e2, #88d3ce);
  margin-top: 5rem;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin: 0;
`

const Subtitle = styled(motion.h2)`
font-size: 1.5rem;
margin-top: 1rem;
`;






