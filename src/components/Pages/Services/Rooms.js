import { Button } from 'bootstrap'
import React from 'react'
import { useAppContext } from '../../../Context'
import Roomtypes from './Roomtypes'

const Rooms = () => {

    const { items, updateItems } = useAppContext()
    const updateBill = (amount) => {
        updateItems({
            cost: items.cost + amount,


        })
    }

    const roomTypes = [
        { type: 'Single', charge: 12.99 },
        { type: 'Double', charge: 24.99 },
        { type: 'Suite', charge: 39.99 },


    ]
    return (


        < div >

            {/* <div className='container'>
            <Roomtypes roomTypes={roomTypes} />

        </div> */}
            {
                roomTypes.map((room, index) => (
                    <Roomtypes key={index} type={room.type} charge={room.charge} />
                ))
            }
        </div >


    )
}
export default Rooms

