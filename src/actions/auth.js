import Swal from "sweetalert2";

import { fetchAxios } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async ( dispatch ) => {

        const resp = await fetchAxios('auth', { email, password }, 'POST');
        const { data: body } = resp;

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({ 
                    uid: body.uid,
                    name: body.name,
                    email: body.email,
                    role: body.role
                }) );
        } else {
            
            const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
            Swal.fire('Error', errorMsg, 'error');
        }
    }
}

export const startRegister = (email, password, name, lastModified) => {
    return async (dispatch) => {

        const resp = await fetchAxios('user', { name, email, password, lastModified, role: 'USER_ROLE' }, 'POST');
        const { data: body } = resp;

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({ 
                uid: body.uid,
                name: body.name,
                role: body.role
            }) );
            
        } else {
            
            const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
            Swal.fire('Error', errorMsg, 'error');
        }
    }
}

export const startLogout = () => {
    return( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        if(localStorage.getItem('token') === null){
            dispatch( logout() );
            dispatch( checkingFinish() );
        } else{

            const resp = await fetchAxios('auth/renew', {},'GET',{}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({ 
                    uid: body.uid,
                    name: body.name,
                    role: body.role
                }) );

            } else {
                dispatch( logout() );
                dispatch( checkingFinish() );
            }
        }

        

    }
}
const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({ type: types.authLogin, payload: user });
const logout = () => ({ type: types.authLogout });

export const checkReCaptchaV3 = async (token = '') => {
    
    const resp = await fetchAxios('auth/recaptcha', { idTokenReCaptcha: token }, 'POST');
    const { data: body } = resp;

    return { ...body };
}

export const startGoogleLogin = ( idToken ) => {
    return async (dispatch) => {
        const resp = await fetchAxios('auth/google', { id_token: idToken }, 'POST');
        const { data: body } = resp;

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({ 
                uid: body.user.uid,
                name: body.user.name,
                email: body.user.email,
                role: body.user.role
            }) );

        } else {
            const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
            Swal.fire('Error', errorMsg, 'error');
        }
    }
}

export const startFacebookLogin = (idToken, name, email) => {
    return async (dispatch) => {

        const resp = await fetchAxios('auth/facebook', { id_token: idToken, name, email }, 'POST');
        const { data: body } = resp;

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({ 
                uid: body.user.uid,
                name: body.user.name,
                email: body.user.email,
                role: body.user.role
            }) );

        } else {
            
            const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
            Swal.fire('Error', errorMsg, 'error');
        }
    }
}