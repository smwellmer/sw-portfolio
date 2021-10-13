import Nav from "../components/Nav";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

export default function Contact(props) {
   return (
      <div>
        <Nav />
        <div className='contact'>
        <h1 className='hi'>{"Hi, I'm Samantha!"}</h1>
            <div className='contactPhoto'>
               <img src='/me2.jpeg' alt='girl sitting on a tree stump in front of a pub'/>
        </div>
        <h1 className='inTouch'>{"Let's get in touch!"}</h1>
        <div className='buttons'>
         <button>
            <a href="mailto:swellmerdev@gmail.com?&subject=Get in touch!" target="_blank" rel="noreferrer">
               <IconContext.Provider value={{ color: '#d8a85e', size: '65px' }}><AiFillMail/></IconContext.Provider>
            </a>
         </button>
         <button>
            <a href='https://www.linkedin.com/in/samanthawellmer/'>
             <IconContext.Provider value={{ color: '#d8a85e', size: '65px' }}><AiFillLinkedin /></IconContext.Provider>
            </a>
         </button>
         <button>
            <a href='https://www.instagram.com/splendidsam/'>
             <IconContext.Provider value={{ color: '#d8a85e', size: '65px' }}><AiFillInstagram/></IconContext.Provider>
            </a>
         </button>
        </div>
     </div>
     </div>
    )
  }