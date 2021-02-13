const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('microsoft', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('microsoft', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('microsoft', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        microsoft: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}