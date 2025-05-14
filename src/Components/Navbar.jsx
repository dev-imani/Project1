import { useState } from 'react'
import logo from '../../image/logo.webp'


const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggleMe = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
            <nav className="border-b-2">
                <div className="max-w-7xl mx-auto justify-between items-center py-8" >
                    <div className="pl-2">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
