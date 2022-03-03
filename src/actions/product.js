import Swal from "sweetalert2";
import { fetchAxios } from "../helpers/fetch";
import { types } from "../types/types";

//START LOADING PRODUCTS
export const productStartLoading = () => {
    return async ( dispatch ) => {

        try{

            const resp = await fetchAxios('product', {},'GET', { limit: 100 });
            const { data: body } = resp;
            
            dispatch( productLoaded(body.products) );

        } catch (err){
            console.log(err);
        }
    }
}
const productLoaded = ( products ) => ({ type: types.productLoaded, payload: products });

export const productStartAddNew = (product) => {
    return async ( dispatch, getState ) => {
        const { uid, name } = getState().auth;
        try {

            const resp = await fetchAxios('product', product, 'POST', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){
            //ENVIAR A REDUX
                product.pid = body.product.pid;
                product.sku = body.product.sku;
                product.user = {
                    _id : uid,
                    name : name
                }

                dispatch( productAddNew(product) );

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: `Producto: '${product.name}' correctamente añadida`,
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

const productAddNew = (product) => ({ type: types.productAddNew, payload: product });
