export function makeAuthHeader(token){
    return {
        headers: {
            Authorization: `Bearer ${token['token']}`
        }
    } 
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}