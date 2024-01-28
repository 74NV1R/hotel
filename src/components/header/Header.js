import React, { useContext } from 'react'
import { useAppContext } from '../../Context'
import { Nav, NavItem, NavLink, NavbarBrand } from "reactstrap"

const Header = () => {

    return (
        <div style={{
            backgroundColor: "navy",
            color: 'white',
            padding: '20px'
        }}>
            <Nav pills>
                <NavbarBrand href='/'>
                    Hotel
                </NavbarBrand>
                <NavItem>
                    <NavLink href="#" >Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About us</NavLink>
                </NavItem>
            </Nav>

        </div>
    )
}

export default Header