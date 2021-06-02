const axios = require('axios')
const queryString = require('query-string')
const {
    cred
} = require('./setCredentials')

async function amazon(options, config = {}) {
    const company = 'amazon'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri,
        grant_type: cred[company].grant_type
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.post('https://api.amazon.com/auth/o2/token', final, config)
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function discord(options, config = {}) {
    const company = 'discord'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri,
        grant_type: cred[company].grant_type,
        scope: cred[company].scope
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.post('https://discord.com/api/oauth2/token', queryString.stringify(final), config)
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function facebook(options) {
    const company = 'facebook'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.get('https://graph.facebook.com/v9.0/oauth/access_token', {
                params: final
            })
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function github(options, config) {
    const company = 'github'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.post('https://github.com/login/oauth/access_token', final, config)
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function google(options, config) {
    const company = 'google'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri,
        grant_type: cred[company].grant_type
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.post('https://www.googleapis.com/oauth2/v4/token', final, config)
            .then(r => {
                resolve(r.data)
            })
            .catch(r => {
                reject(r.response.data)
            })
    })
}

async function microsoft(options, config) {
    const company = 'microsoft'
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    const modifiedCred = {
        client_id: cred[company].client_id,
        client_secret: cred[company].client_secret,
        redirect_uri: cred[company].redirect_uri,
        grant_type: cred[company].grant_type,
        scope: cred[company].scope
    }
    const tenant = cred.microsoft.tenant
    const final = {
        ...modifiedCred,
        ...options
    }
    return new Promise((resolve, reject) => {
        axios.post(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, queryString.stringify(final), config)
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

async function getToken(company, params, config) {
    if (functions[company] == undefined) {
        throw `Err!! ${company.charAt(0).toUpperCase() + company.slice(1)} isn't a valid company dumbass! If it is a valid company instead, pls visit https://github.com/Zo-Bro-23/zoauth/issues/new to give us feedback on which OAuth services to incooperate in the next update.`
    }
    if (params == undefined) {
        throw `Err!! Gimme some params, genius!`
    }
    return functions[company](params, config)
}

module.exports = getToken