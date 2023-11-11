import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='content container'>
                <div className='logo'>
                    <Link to='/'>
                        <h1>BlogZee</h1>
                    </Link>
                </div>
                <div className='links'>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/add-new-blog'>
                            <li>New Blog</li>
                        </Link>
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default Navbar