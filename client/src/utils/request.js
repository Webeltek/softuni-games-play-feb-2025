const request = async (method, url, data, options = {} ) => {

    if(method !== 'GET'){
        options.method = method;
    }

    // const authData = JSON.parse(localStorage.getItem('auth'));

    // if(authData.accessToken){
    //     options = {
    //         ...options,
    //         headers : {
    //             'X-Authorization': authData.accessToken,
    //             ...options.headers,
    //         }
    //     }
    // }

    if(data){
        options = {
            ...options,
            headers: {
                ...options.headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    
    const response = await fetch(url, options);
    const responseContentType = response.headers.get('content-type');
    // prevent missing response content when deleting which will throw error if response.json() is called
    if(!responseContentType ){
        return;
    }

    const result = await response.json();

    return result;
}

export default {
    get: request.bind(null, 'GET'),
    // get: (...params) => request('GET', ...params)
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request
}