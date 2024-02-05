import React from 'react'
import { useAppContext } from '../../Context'
import { Badge } from 'react-bootstrap'

const Navigation = () => {

    const { items, updateItems } = useAppContext()

    return (
        <nav className='nav'>
            <a href='/' className='brand'>Hotel</a>
            <ul>
                <li>
                    <Badge color='info'>Your bill: {items.cost} </Badge>
                </li>
                <li>
                    <a href='/payment'>Pay</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                <li>
                    <a href='/notice'>Notice</a>
                </li>
                <li>
                    <a href='/auth'>Login</a>
                </li>
            </ul>


        </nav>
    )
}

export default Navigation