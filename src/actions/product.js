import Swal from "sweetalert2";
import { fetchAxios, fetchAxiosFiles } from "../helpers/fetch";
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

//INSERT NEW PRODUCT
export const productStartAddNew = (product) => {
    return async ( dispatch, getState ) => {
        const { uid, name } = getState().auth;
        try {
            const resp = await fetchAxios('product', product, 'POST', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            //OK INSERT PRODUCT
            if(body.ok){
                //SI VIENE IMAGEN
                if(product.dataFile){
                    try{
                        const respUpload = await fetchAxiosFiles(`upload/products/${ body.product.pid }`, product.dataFile);
                        const { data: bodyUpload } = respUpload;
                        //OK UPLOAD IMAGEN Y VINCULACION A REGISTRO
                        if(bodyUpload.ok){
                            product.img = bodyUpload.product.img;
                        } else {
                            const errorMsg = bodyUpload.errors ? Object.values( bodyUpload.errors )[0].msg : bodyUpload.msg;
                            Swal.fire('Error', errorMsg, 'error');
                        }
                    } catch(errUpload) {
                            console.log(errUpload);
                    }
                }
                product.pid = body.product.pid;
                product.sku = body.product.sku;
                product.user = {
                    _id : uid,
                    name : name
                };
                delete product.url;

                //ENVIAR A REDUX
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

//DELETE PRODUCT
export const productStartDelete = (product) => {
    return async ( dispatch ) => {
        try {
            
            const resp = await fetchAxios(`product/${product}`, {}, 'DELETE', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            if(body.ok){
                dispatch( productDeleted({pid: product}) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (err){
            console.log(err);
        }  
    }
}
const productDeleted = (product) => ({ type: types.productDeleted, payload: product });

//ACTIVO-INACTIVO PRODUCT
export const productStartSetActive = (product) => {
    return async ( dispatch, getState ) => {
        
        const { product: products } = getState().product;
        const selectedProduct = products.filter( value => (value.pid === product.pid));
        
        dispatch( productSetActive(selectedProduct[0]) );
    }
}
const productSetActive = (product) => ({ type: types.productSetActive, payload: product });
export const productRemoveActive = () => ({ type: types.productRemoveActive });

//UPDATE PRODUCT
export const productStartEdit = (product) => {
    return async ( dispatch, getState ) => {
        
        const { uid, name } = getState().auth;
        
        product.category = product.category._id;

        try {
            const resp = await fetchAxios(`product/${product.pid}`, product, 'PUT', {}, localStorage.getItem('token'));
            const { data: body } = resp;

            console.log(resp);
            //OK UPDATE CORRECTO
            if(body.ok){
                //SI VIENE IMAGEN
                if(product.dataFile){
                    try{
                        const respUpload = await fetchAxiosFiles(`upload/products/${ body.product.pid }`, product.dataFile);
                        const { data: bodyUpload } = respUpload;
                        //OK UPLOAD IMAGEN Y VINCULACION A REGISTRO
                        if(bodyUpload.ok){
                            product.img = bodyUpload.product.img;
                        } else {
                            const errorMsg = bodyUpload.errors ? Object.values( bodyUpload.errors )[0].msg : bodyUpload.msg;
                            Swal.fire('Error', errorMsg, 'error');
                        }
                    } catch(errUpload){
                        console.log(errUpload);
                    }
                }
                product.pid = body.product.pid;
                product.sku = body.product.sku;
                product.user = {
                    _id : uid,
                    name : name
                };
                delete product.url;
                
                //ENVIAR A REDUX
                dispatch( productEdited(product) );
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: `Producto: '${product.name}' correctamente Editado`,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            } else {
                const errorMsg = body.errors ? Object.values( body.errors )[0].msg : body.msg;
                Swal.fire('Error', errorMsg, 'error');
            }
        } catch (err){
            console.log(err);
        }
    }
}
const productEdited = (product) => ({ type: types.productEdited, payload: product });
