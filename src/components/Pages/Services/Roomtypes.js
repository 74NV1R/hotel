import React, { useState } from 'react'

const Roomtypes = ({ type, charge }) => {

    const [expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    return (
        <div className='col-4'>
            <br />
            <div className=' text-white bg-red-900 p-3 m-1 rounded-lg hover:drop-shadow-2xl'>
                <div onClick={toggleExpand}>
                    <h3>{type}</h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 cursor-pointer rounded-full dark:bg-blue-900 dark:text-blue-300">Click to {!expand ? 'book' : 'hide'}</span>

                </div>
                {expand && (
                    <div className="card-body">
                        <p>{charge}</p>
                    </div>
                )}


            </div>
        </div>

    )
}

export default Roomtypes

