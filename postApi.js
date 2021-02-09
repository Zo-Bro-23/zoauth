const axios = require('axios')

function postApi(url, data, options, config){
    const defaultOptions = {token_type: "Bearer"}
    const final = {...defaultOptions, ...options}
    return new Promise((resolve, reject) => {
        axios.post(url, data, {...{headers: {Authorization: `${final.token_type} ${final.access_token}`}}, ...config})
            .then(r => {resolve(r.data)})
            .catch(r => {resolve(r.response.data)})
        }) 
}

module.exports = postApi