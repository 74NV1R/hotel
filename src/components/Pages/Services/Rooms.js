import { Button } from 'bootstrap'
import React from 'react'
import { useAppContext } from '../../../Context'

const Rooms = () => {

    const { items, updateItems } = useAppContext()
    const updateBill = (amount) => {
        updateItems({
            cost: items.cost + amount,


        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='servicelist'>


                    <h2>
                        Rooms available
                    </h2>
                    <ul>
                        <li>
                            Single <button type="button" class="btn btn-outline-primary" onClick={() => updateBill(15)}>AC</button> <button type="button" class="btn btn-outline-primary" onClick={() => updateBill(10)} >Non AC</button>
                        </li>
                        <li>
                            Double <button type="button" class="btn btn-outline-primary" onClick={() => updateBill(25)}>AC</button> <button type="button" class="btn btn-outline-primary" onClick={() => updateBill(20)}>Non AC</button>
                        </li>
                        <li>
                            Suit <button type="button" class="btn btn-outline-primary" onClick={() => updateBill(35)}>AC</button> <button type="button" class="btn btn-outline-primary" disabled>Non AC</button>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Rooms