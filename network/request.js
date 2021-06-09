import axios from 'axios'

export function request(config,success,failture) {
    const instance = axios.create({

    })
    instance(config)
    .then(res=>{
        success(res)
    })
    .catch(err=>{
        failture(err)
    })
}