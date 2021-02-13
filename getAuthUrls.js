const {
    cred
} = require('./setCredentials')
const amazon = 'https://www.amazon.com/ap/oa'
const apple = 'https://appleid.apple.com/auth/authorize'
const discord = 'https://discord.com/api/oauth2/authorize'
const facebook = 'https://www.facebook.com/v9.0/dialog/oauth'
const github = 'https://github.com/login/oauth/authorize'
const google = 'https://accounts.google.com/o/oauth2/v2/auth'
let microsoft = `https://login.microsoftonline.com/${cred.microsoft.tenant}/oauth2/v2.0/authorize`

const querystring = require('query-string')

const urls = {
    amazon: amazon,
    discord: discord,
    facebook: facebook,
    github: github,
    google: google,
    microsoft: microsoft
}

function getAuthUrls(company, options) {
    if (company == 'microsoft') {
        microsoft = `https://login.microsoftonline.com/${cred.microsoft.tenant}/oauth2/v2.0/authorize`
    }
    if (urls[company] == undefined) {
        throw `Err!! ${company.charAt(0).toUpperCase() + company.slice(1)} isn't a valid company dumbass! If it is a valid company instead, pls visit https://github.com/Zo-Bro-23/zoauth/issues/new to give us feedback on which OAuth services to incooperate in the next update.`
    }
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
            cred[key].scope = cred[key].scope.join(' ')
        }
    }
    modifiedCred = {
        client_id: cred[company].client_id,
        redirect_uri: cred[company].redirect_uri,
        scope: cred[company].scope,
        response_type: cred[company].response_type,
    }
    const final = {
        ...modifiedCred,
        ...options
    }
    return `${urls[company]}?${querystring.stringify(final)}`
}

module.exports = getAuthUrls