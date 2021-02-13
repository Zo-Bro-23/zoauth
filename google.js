const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('google', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('google', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('google', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        google: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}