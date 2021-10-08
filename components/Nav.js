import Hamburger from "./Hamburger"
import { useState } from "react";
import Link from "next/link";

export default function Nav(props) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className='navigation'>
                <ul>
                    <li><Link href={`/`}>
                    Home
                    </Link></li>
                    <li><Link href={`/projectList`}>
                    Projects
                    </Link></li>
                    <li><Link href={`/Resume`}>
                    Resume
                    </Link></li>
                    <li><Link href={`/Contact`}>
                    Contact
                    </Link></li>
                </ul>
                <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>

            <style jsx>{`
                .navigation {
                    width: 100%;
                    height: 60px;
                    background-color: #d8a85e;
                   
                }
                
                .navigation ul {
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    background-color: #d8a85e;
                    height: 15vh;
                    width: 100vw;
                    margin-top: 60px;
                    position: absolute;
                    
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                    font-size: 1.5em;
                    transition: transform 0.5s ease-in-out;
                }
            `}
            </style>

        </div>
    )
  }