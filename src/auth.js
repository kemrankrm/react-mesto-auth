export const BASE_URL = 'https://auth.nomoreparties.co';

export default function auth(data, endPoint){
    return fetch(`${BASE_URL}/${endPoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": data.email,
            "password": data.password
        })
    })
    .then(res => {
        console.log(res)
        try {
            if(res.ok === true){
                return res.json()
            }
        } catch(e){
            return e
        }
    })
    .catch(e => console.log(e))
        
}

export function getContent(jwt){
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
    .then(res => res.json())
    .then(res => res.data)
    .catch(e => console.log(e))
}