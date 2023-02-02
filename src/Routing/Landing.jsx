import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ForgotPassword } from '../Components/ForgotPassword'
import { Login } from '../Components/Login'
import { Registration } from '../Components/Registration'

export const Landing = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                    <Route path='/password' element={<ForgotPassword />} />

                </Routes>
            </BrowserRouter>

        </React.Fragment>
    )
}
