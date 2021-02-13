const axios = require('axios')
const queryString = require('query-string')
const {
    cred
} = require('./setCredentials')

async function amazon(options, config = {}) {
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://api.amazon.com/user/profile', {
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
                reject(r.response.data)
            })
    })
}

async function discord(options, config = {}) {
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://discord.com/api/oauth2/@me', {
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
                reject(r.response.data)
            })
    })
}

async function facebook(options, config = {}) {
    const defaultOptions = {
        fields: "id, name"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://graph.facebook.com/me', {
                ...{
                    params: {
                        fields: final.fields,
                        access_token: final.access_token
                    }
                },
                ...config
            })
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function github(options, config = {}) {
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/user', {
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
                reject(r.response.data)
            })
    })
}

async function google(options, config = {}) {
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
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
                reject(r.response.data)
            })
    })
}

async function microsoft(options, config = {}) {
    const defaultOptions = {
        token_type: "Bearer"
    }
    const final = {
        ...defaultOptions,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://graph.microsoft.com/oidc/userinfo', {
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
                reject(r.response.data)
            })
    })
}

const functions = {
    amazon: amazon,
    facebook: facebook,
    discord: discord,
    facebook: facebook,
    github: github,
    google: google,
    microsoft: microsoft
}

async function getDetails(company, options, config) {
    if (functions[company] == undefined) {
        throw `Err!! ${company.charAt(0).toUpperCase() + company.slice(1)} isn't a valid company dumbass! If it is a valid company instead, pls visit https://github.com/Zo-Bro-23/zoauth/issues/new to give us feedback on which OAuth services to incooperate in the next update.`
    }
    if (options == undefined) {
        throw `Err!! Gimme an access token genius!`
    }
    else if (options.access_token == undefined) {
        throw `Err!! Gimme an access token genius!`
    }
    return functions[company](options, config)
}

module.exports = getDetails