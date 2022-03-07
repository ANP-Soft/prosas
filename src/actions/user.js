import Swal from "sweetalert2";
import { fetchAxios } from "../helpers/fetch";
import { types } from "../types/types";

export const userStartLoading = () => {
    return async ( dispatch ) => {

        try{

            const resp = await fetchAxios('user', {},'GET', { limit: 1000 }, localStorage.getItem('token'));
            const { data: body } = resp;

            dispatch( userLoaded(body.users) );

        } catch (err){
            console.log(err);
        }
    }
}
const userLoaded = ( users ) => ({ type: types.userLoaded, payload: users });

export const userStartAddNew = (user) => {
    return async ( dispatch ) => {

        user.role = 'USER_ROLE';
        try{
            
            const resp = await fetchAxios('user', user, 'POST');
            const { data: body } = resp;
            if(body.ok){
                dispatch( userNew({
                    name : body.name,
                    email: user.email,
                    role: user.role,
                    uid: body.uid
                }));
            }

        } catch(err) {
            console.log(err);
        }
    }
}
const userNew = ( user ) => ({ type: types.userAddNew, payload: user });

export const userStartDelete = (user) => {
    return async ( dispatch, getState ) => {
        try {
            
            const { active } = getState().user;            
            
            const resp = await fetchAxios(`user/${user}`, {}, 'DELETE', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){
                active.status = false;
                dispatch( userEdited(active) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (err){
            console.log(err);
        }  
    }
}
const userEdited = (user) => ({ type: types.userEdited, payload: user });


//USER ACTIVA INACTIVA
export const userStartSetActive = (user) => {
    return async ( dispatch, getState ) => {
        
        const { user: users } = getState().user;
        const selectedUser = users.filter( value => (value.uid === user.uid));
        
        // console.log(selectedUser);


        dispatch( userSetActive(selectedUser[0]) );
    }
}
const userSetActive = (user) => ({ type: types.userSetActive, payload: user });
export const userRemoveActive = () => ({ type: types.userRemoveActive });