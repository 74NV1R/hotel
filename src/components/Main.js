import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Services from './Pages/Services/Services'
import Notice from './Pages/Notice/Notice'
import Contact from './Pages/Contact/Contact'
import Auth from './Auth'
import Rooms from './Pages/Services/Rooms'
import Payment from './Pages/Payment'

const Main = () => {
    return (
        <div>
            <div className='row'>
                <Header />
            </div>
            <div className='container'>
                <Routes>
                    <Route path='/services' element={<Services />} />
                    <Route path='/notice' element={<Notice />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/payment" element={<Payment />} />



                    <Route href="/" element={<Navigate to="/" />} />
                </Routes>
            </div>
            <div className='row'>
                <Footer />
            </div>
        </div>
    )
}

export default Main