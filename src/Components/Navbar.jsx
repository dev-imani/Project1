import { useState } from 'react'
import logo from '../../image/logo.webp'
import { RiMenu3Line, RiCloseLine as RiClose } from 'react-icons/ri';
import { LINKS } from '../../constants/index.js';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggleMe = () => {
        setisOpen(!isOpen)
    }
    
    return (
        <>
            <nav className="border-b-2">
                {/* Main navbar container */}
                <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-4">
                    {/* Logo */}
                    <div>
                        <a href="#">
                            <img src={logo} width={150} height={15} alt="" />
                        </a>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 md:space-x-4">
                        {LINKS.map((link, index) => (
                            <a key={index} href={link.link} className='uppercase text-sm font-medium'>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMe} 
                            className='text-2xl focus:outline-none' 
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <RiClose /> : <RiMenu3Line />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                    {LINKS.map((links, index) => (
                        <a 
                            key={index} 
                            href={links.link} 
                            className='uppercase text-lg font-medium block py-2 tracking-wide'
                        >
                            {links.name}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar