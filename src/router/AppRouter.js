import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminScreen } from '../components/admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

import { HomeScreen } from '../components/shop/HomeScreen';



export const AppRouter = () => {
  return (
    
    <BrowserRouter>
        <Routes>

            <Route path='/' element={
                <HomeScreen />
            }/>

            <Route path='/login' element={
                <LoginScreen />
            }/>

            <Route path='/admin' element={
                <AdminScreen />
            }/>

            <Route path='*' element={<Navigate replace to={'/'} />} />            

        </Routes>
    </BrowserRouter>
  )
}
