const axios = require('axios')

function getApi(url, options, config){
    const defaultOptions = {token_type: "Bearer"}
    const final = {...defaultOptions, ...options}
    return new Promise((resolve, reject) => {
        axios.get(url, {...{headers: {Authorization: `${final.token_type} ${final.access_token}`}}, ...config})
            .then(r => {resolve(r.data)})
            .catch(r => {resolve(r.response.data)})
        }) 
}

module.exports = getApi