import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function SidebarData(){
    const [click, setClick] = useState(false);
    const [content, setContent] = useState ("");

    const showAboutSidebar = () => {
        setClick(!click)
        if (click) {
            setContent([
                <li className="nav-text"><Link to='/about/about-app'>About App</Link></li>,
                <li className="nav-text"><Link to='/about/about-author'>About Author</Link></li>
            ])
        }
    }

    return (
        <>
        <li className="nav-text"><Link to='/'>Home</Link></li>
        <li className="nav-text"><Link onClick={showAboutSidebar} to='/about'>About</Link></li>
        {content}
        </>
    )
}

export default SidebarData