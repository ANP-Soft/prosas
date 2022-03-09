import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../../actions/auth';

import { NavbarAdmin } from '../layout/NavbarAdmin';
import { Sidebar } from '../layout/Sidebar';
import { HomeScreen, DashboardScreen, OrdersScreen, ProductsScreen, CustomersScreen, ReportsScreen, IntegrationScreen, AdmProductsScreen, AdmCategoriesScreen, AdmUsersScreen  } from './pages';
import './style.css';

export const AdminScreen = () => {

  const { page } = useSelector(store => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startChecking() );
}, [dispatch , page]);

  return (
    <>
      <NavbarAdmin />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          {
            (page === 'dashboard') ?
              <DashboardScreen />
            : (page === 'orders') ?
              <OrdersScreen />
            : (page === 'products') ?
              <ProductsScreen />
            : (page === 'customers') ?
              <CustomersScreen />
            : (page === 'reports') ?
              <ReportsScreen />
            : (page === 'integrations') ?
              <IntegrationScreen />
            : (page === 'admProducts') ?
              <AdmProductsScreen />
            : (page === 'admCategories') ?
              <AdmCategoriesScreen />
            : (page === 'admUsers') ?
              <AdmUsersScreen />
            : <HomeScreen />
          }
          
        </div>
      </div>
    </>
  )
}
