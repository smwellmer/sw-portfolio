export default function Hamburger({isOpen}) {
    return (
        <>
            <div className='hamburger'>
                <div className='burger burger1'></div>
                <div className='burger burger2'></div>
                <div className='burger burger3'></div>
            </div>

            <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2.1rem;
                    display: flex;
                    justify-content: space-between;
                    flex-flow: column nowrap;
                    z-index; 10;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                    background-color: black;
                    position: relative;
                }
            
                .burger1{
                    transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${isOpen ? 'translateX(100%)' : 'tranlsateX(0)'};
                    opacity: ${isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            `}
            </style>
        </>
    )
  }