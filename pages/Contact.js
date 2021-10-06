import Nav from "../components/Nav";

export default function Contact(props) {
   return (
      <div>
        <Nav />
        <h1>Contact Me</h1>
        <img src='/me2.jpeg' alt=''/>
        <a href="mailto:swellmerdev@gmail.com?&subject=Let's get in touch!" target="_blank">Email me!</a>
     </div>
    )
  }