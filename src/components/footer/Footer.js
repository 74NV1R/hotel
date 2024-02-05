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
            textAlign: 'center',
            marginTop: 'auto'
        }}>
            Tanvir Hasan
            <br />
            <a href='https://github.com/74NV1R' style={{
                textDecoration: 'none'
            }}>
                GitHub
            </a>
        </div >

    )
}

export default Footer