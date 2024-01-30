import React, { useContext } from 'react'
import { useAppContext } from '../../Context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';

const Header = () => {

    return (
        <div>
            <Navigation />
        </div>

    )
}

export default Header