import Footer from "../components/Footer"


function About() {
  return (
    <div className="about-me-container">
    <img src="" alt = "Sharon Brown" className="profile-photo"/>
      <p className="about-me-content">Hi, I&apos;m Sharon Brown, a passionate and driven Front End Software Engineer with a unique blend of experience in customer service and web development. My journey into the tech world began with a strong commitment to learning and mastering the skills needed to build impactful web solutions.</p>
      <br/>
      <p className="about-me-content">With a solid foundation in JavaScript, React, Node.js, and other modern technologies, I&apos;m dedicated to creating high-quality software that not only meets customer needs but also drives business success. My background in customer service has honed my problem-solving skills and taught me the importance of delivering excellent user experiences.</p>
      <br />
      <p className="about-me-content">I have hands-on experience with a variety of tools and frameworks, including MongoDB for database management, Figma and Canva for design and prototyping, and collaboration tools like Asana and Trello. I am well-versed in Agile methodologies and Scrum, which enables me to work effectively in dynamic, fast-paced environments.</p>
      <br/>
      <p className="about-me-content">Currently, I am applying my skills as a Delivery Associate at Ray LGX LLC, where I optimize route efficiency and ensure seamless package deliveries, and completing freelance Software Development projects. In my previous role as a PetSmart Associate Lead, I led daily store operations, managed stock levels, and implemented time management techniques to enhance productivity.</p>
      <br />
      <p className="about-me-content">I am always eager to learn and grow, and I look forward to contributing my skills to a dynamic team that values innovation and excellence. Whether working on a collaborative project or independently, I am committed to delivering solutions that exceed expectations.</p>
      <br />
      <p className="about-me-content">Feel free to explore my Portfolio, LinkedIn, and GitHub to see more of my work and connect with me. I&apos;m excited about the possibilities ahead and the opportunity to make a difference through Software and Web development.</p>
      <br />
      <div className="skills-container">
        <h2>Aquired Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src = "javascript-icon.png" alt = "JavaScript" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
                    <img src="react-icon.png" alt="React" />
                    <h3>React.js</h3>
                </div>
                <div className="skill-item">
                    <img src="nodejs-icon.png" alt="Node.js" />
                    <h3>Node.js</h3>
                </div>
        </div>
      </div>
      <a href = "" className="cta">Download My Resume</a>
      <a href = "" className="cta">View My LinkedIn</a>
      <Footer />
    </div>
  )
}

export default About
