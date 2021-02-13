const axios = require('axios')

function getApi(url, options, config, except) {
    if (url == undefined) {
        throw `Err!! You need to gimme a valid url genius!`
    }
    if (!except) {
        if (options == undefined) {
            throw `Err!! Gimme an access token genius!`
        }
        else if (options.access_token == undefined) {
            throw `Err!! Gimme an access token genius!`
        }
    }
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
                ...{
                    headers: {
                        Authorization: `${final.token_type} ${final.access_token}`
                    }
                },
                ...config
            })
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                if(r.response == undefined) {
                    reject(r)
                }
                else {
                    reject(r.response.data)
                }
            })
    })
}

module.exports = getApi