import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const fetchAxios = async (endpoint, body='', method, params='', authToken='') => {
    
    const url = `${ baseUrl }/${ endpoint }`;
    let headers;

    if(authToken){
        headers = {'Content-type': 'application/json', 'x-api-key': authToken};
    }else{
        headers = { 'Content-type': 'application/json' };
    }

    try {
        return await axios({
            method,
            headers,
            params,
            url,
            data: JSON.stringify( body ),
        });
    } catch(err){
        return err.response;    
    }
}

const fetchAxiosFiles = async (endpoint, file) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const headers = { 'Content-type': 'multipart/form-data' };
    
    try {

        const formData = new FormData();
        formData.append('img', file);
        return await axios.put(url, formData, { headers });
        
    } catch(err){
        return err.response;    
    }
    
}

export {
    fetchAxios,
    fetchAxiosFiles
}