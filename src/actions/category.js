import Swal from "sweetalert2";
import { fetchAxios } from "../helpers/fetch";
import { types } from "../types/types";

export const categoryStartAddNew = (category) => {
    return async ( dispatch, getState ) => {
        const { uid, name } = getState().auth;
        try{

            const resp = await fetchAxios('category', category, 'POST', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){
                //TODO AGREGAR A REDUX
                category.catId = body.category.catId;
                category.code = body.category.code;
                category.user = {
                    _id : uid,
                    name : name
                }

                dispatch( categoryAddNew(category) );

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: `Categoria: '${category.name}' correctamente añadida`,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                });

            } else {
                const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
                Swal.fire('Error', errorMsg, 'error');
            }

        }catch(err){
            console.log(err);
        }
    }
}


const categoryAddNew = (category) => ({ type: types.categoryAddNew, payload: category });

export const categoryStartLoading = () => {
    return async ( dispatch, getState ) => {

        try{

            const resp = await fetchAxios('category', {},'GET', { limit: 100 });
            const { data: body } = resp;
            
            dispatch( categoryLoaded(body.categories) );

        } catch (err){
            console.log(err);
        }
    }
}

const categoryLoaded = ( categories ) => ({ type: types.categoryLoaded, payload: categories });


export const categoryDelete = (category) => {
    return async ( dispatch, getState ) => {
        try {
            
            const resp = await fetchAxios(`category/${category}`, {}, 'DELETE', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){
                dispatch( categoryDeleted({catId: category}) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (err){
            console.log(err);
        }  
    }
}

const categoryDeleted = (category) => ({ type: types.categoryDeleted, payload: category });

