import axios from "axios"

export function request(config) {
    const instance = axios.create({
        // baseURL: "/lovelive-vite",
        timeout: 5000
    })
    return instance(config)
}

// export function getRequest(url,parmas){
//    return axios.get(url+"?"+parmas.replace(/\n/g,"&"))
// }
// export function postRequest(url,parmas){
//     let json=parmas.replace(/\n/g,",").replace("=",":")
//     return axios.post(url,json.parseJSON())
//  }