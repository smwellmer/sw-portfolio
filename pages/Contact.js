import Nav from "../components/Nav";

export default function Contact(props) {
   return (
      <div>
        <Nav />
        <div className='contact'>
         <h1>Contact Me</h1>
         <div className='contactPhoto'>
         <h1 className='hi'>{"Hi, I'm Samantha"}</h1>
         <img src='/me2.jpeg' alt='girl sitting on a tree stump in front of a pub'/>
        </div>
        <div className='buttons'>
         <button><a href="mailto:swellmerdev@gmail.com?&subject=Get in touch!" target="_blank" rel="noreferrer">Email me!</a></button>
         <button><a href='https://www.linkedin.com/in/samanthawellmer/'>LinkedIn</a></button>
         <button><a href='https://www.instagram.com/splendidsam/'>Instagram</a></button>
        </div>
     </div>
     </div>
    )
  }