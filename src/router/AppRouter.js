import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { startChecking } from '../actions/auth';
import { AdminScreen } from '../components/admin/AdminScreen';
import { CheckingScreen } from '../components/auth/CheckingScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { HomeScreen } from '../components/shop/HomeScreen';
import { AdminRoute } from './AdminRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, role } = useSelector(store => store.auth);
    
    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch]);
    

    if(checking){
        return (
            <CheckingScreen />
        );
    }

    return (
        
        <BrowserRouter>
            <Routes>

                <Route path='/' element={
                    <HomeScreen />
                }/>

                <Route path='/login' element={
                    <PublicRoute uid={ uid } role={ role }>
                        <LoginScreen />
                    </PublicRoute>
                } />
                
                <Route path='/register' element={
                    <PublicRoute uid={ uid } role={ role }>
                        <RegisterScreen />
                    </PublicRoute> 
                }/>

                <Route path='/admin' element={
                    <AdminRoute role={ role }>
                        <AdminScreen />
                    </AdminRoute>
                }/>

                <Route path='*' element={<Navigate replace to={'/'} />} />            

            </Routes>
        </BrowserRouter>
    )
}
