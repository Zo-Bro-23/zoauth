const axios = require('axios')
const queryString = require('query-string')
const {cred} = require('./setCredentials')

async function amazon(options, config = {}){
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
    const final = {...modifiedCred, ...options}
    return axios.post('https://api.amazon.com/auth/o2/token', final, config)
}

async function discord(options, config = {}){
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
    const final = {...modifiedCred, ...options}    
    return axios.post('https://discord.com/api/oauth2/token', queryString.stringify(final), config)
}

async function facebook(options){
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
    const final = {...modifiedCred, ...options}
    return axios.get('https://graph.facebook.com/v9.0/oauth/access_token', {params: final})
}

async function github(options, config){
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
    const final = {...modifiedCred, ...options}
    return axios.post('https://github.com/login/oauth/access_token', final, config)
}

async function google(options, config){
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
    const final = {...modifiedCred, ...options}
    return axios.post('https://www.googleapis.com/oauth2/v4/token', final, config)
}

async function microsoft(options, config){
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
    const final = {...modifiedCred, ...options}
    return axios.post(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, queryString.stringify(final), config)
}

const functions = {amazon: amazon, facebook: facebook, discord: discord, facebook: facebook, github: github, google: google, microsoft: microsoft}

async function getToken(company, params, config){
    return functions[company](params, config)
}

module.exports = getToken