import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer(props) {
    return <div className='footerWrap'>
       <footer className='footer'>
         <a href='https://www.linkedin.com/in/samanthawellmer/'><AiFillLinkedin /></a>
          Samantha Wellmer © 2021 
         <a href='https://www.instagram.com/splendidsam/'><AiFillInstagram/></a>
       </footer>;
      </div>
  }