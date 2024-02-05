import React from 'react'

const Services = () => {
    return (
        <div className='container' >
            <div className='row'>
                <div className='servicelist'>

                    <h2>Choose our services</h2>
                    <br />

                    <a href="/rooms" class="block max-w-sm p-6 bg-white border border-black-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 hover:drop-shadow-2xl dark:border-gray-700 dark:hover:bg-gray-700" >

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Book a room</h5>
                        <p class="font-normal text-black-700 dark:text-gray-400">Various kinds of room to choose and book, now!</p>
                    </a>
                    <br />

                    <a href="/rooms" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 hover:drop-shadow-2xl dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Room service</h5>
                        <p class="font-normal text-black-700 dark:text-gray-400">Get your desired services right in your room, delivered!</p>
                    </a>
                    <br />
                    <a href="/rooms" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 hover:drop-shadow-2xl dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Organize an event</h5>
                        <p class="font-normal text-black-700 dark:text-gray-400">Hire our space and people to design and implement the ceremony you want!</p>
                    </a>




                    <br />
                </div>
            </div>
        </div>
    )
}

export default Services