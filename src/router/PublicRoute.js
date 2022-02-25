import React from 'react';
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, uid, role }) => {

    return !!uid
                ? (role === 'USER_ROLE') ? <Navigate to="/" /> :  <Navigate to="/admin" />
                : children
}
