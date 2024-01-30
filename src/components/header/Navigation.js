import React from 'react'

const Navigation = () => {
    return (
        <nav className='nav'>
            <a href='/' className='brand'>Hotel</a>
            <ul>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                <li>
                    <a href='/notice'>Notice</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation