const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('discord', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('discord', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('discord', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        discord: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}