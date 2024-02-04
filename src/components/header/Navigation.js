import React from 'react'
import { useAppContext } from '../../Context'
import { Badge } from 'react-bootstrap'

const Navigation = () => {

    const { items, updateItems } = useAppContext()

    return (
        /*         <nav className='nav'>
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
        
        
                </nav> */

        <nav className='p-4 bg-red-950 shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-white font[Poppins] cursor-pointer'>
                    <a href='/' className='text-white'>
                        Hotel
                    </a>

                </span>
                <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
                    <ion-icon name="grid-outline"></ion-icon>
                </span>
            </div>
            <ul className='md:flex md:items-center z[-1] md:z-auto md:static absolute bg-red-950 w-full left-0 md:my-0md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <Badge color='info'>Your bill: {items.cost} </Badge>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='/payment' className='text-xl text-white hover:text-gray-400 duration-500 '>Pay</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='/services' className='text-xl text-white hover:text-gray-400 duration-500'>Services</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='/contact' className='text-xl text-white hover:text-gray-400 duration-500'>Contact</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='/notice' className='text-xl text-white hover:text-gray-400 duration-500'>Notice</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='/auth' className='text-xl text-white hover:text-gray-400 duration-500'>Login</a>
                </li>
            </ul>




        </nav>
    )
}

export default Navigation