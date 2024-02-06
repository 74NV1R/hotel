import { Modal, Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import React, { useState } from 'react'

const Roomtypes = ({ type, charge }) => {

    const [expand, setExpand] = useState(false)
    const [book, setBook] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(1)
    const [modal, setModal] = useState(false)
    const [date, setDate] = useState('')

    const toggle = () => setModal(!modal)


    const toggleExpand = () => {
        setExpand(!expand)
    }

    const toggleBook = () => {
        setBook(!book)
    }

    const bookRoom = () => {

    }



    const handleChange = (e) => {
        setSelectedNumber(parseInt(e.target.value))
    }

    const calculateFutureDate = (days) => {
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000)
        return futureDate.toLocaleDateString("en-GB")
    }

    return (
        <div className='col-3'>
            <br />
            <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 hover:drop-shadow-2xl dark:border-gray-700 dark:hover:bg-gray-700">
                <div onClick={toggleExpand}>
                    <h3>{type}</h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 cursor-pointer rounded-full dark:bg-blue-900 dark:text-blue-300">Click to {!expand ? 'book' : 'hide'}</span>

                </div>
                {expand && (
                    <div className="card-body">
                        <p>{charge}$ daily</p>
                        <button type="button" class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={toggle}>Check in today</button>
                        <button type="button" class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={toggleBook} >Book for later</button>

                    </div>
                )}

                {book ? <span>
                    How many days till you check in?
                    <br />

                    <label htmlFor="numberSelect">Select a number:</label>
                    <select id="numberSelect" value={selectedNumber} onChange={handleChange}>
                        {[...Array(7).keys()].map((number) => (
                            <option key={number + 1} value={number + 1}>
                                {number + 1}
                            </option>
                        ))}
                    </select>
                    <p>Your check-in date: {calculateFutureDate(selectedNumber)}</p>
                    <br />
                    <button type="button" class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={setModal} >Book</button>

                </span> : null}


            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {book ? 'Book' : 'Check-in'} ?
                    Starting from: {book ? calculateFutureDate(selectedNumber) : 'today'}
                    <br />
                    Starting price: {charge}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={bookRoom}>
                        Confirm
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}

export default Roomtypes

