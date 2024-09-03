import Footer from "../components/Footer"


function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Let&apos;s Collaborate</h2>
        <form action="#" method = "POST">
          <input type = "text" name = "name" placeholder="Your Name" required />
          <input type = "email" name = "email" placeholder="Your Email" required />
          <textarea name = "message" placeholder="Your Message" required></textarea>
          <button type = "submit" className="cta">Send Message</button>
        </form>  
      </div>
      <Footer />
    </div>
  )
}

export default Contact
