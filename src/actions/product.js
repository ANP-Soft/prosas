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