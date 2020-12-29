export function makeAuthHeader(token){
    return {
        headers: {
            Authorization: `Bearer ${token['token']}`
        }
    } 
}