import React, { useContext } from 'react'
import { useAppContext } from '../../Context'

const Footer = () => {

    return (

        <div className='footer' style={{
            backgroundColor: 'black',
            bottom: 0,
            position: 'absolute',
            height: '100px',
            width: '100%',
            display: 'block',
            color: 'white',
            align: 'center'
        }}>
            Tanvir Hasan
        </div >

    )
}

export default Footer