const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('facebook', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('facebook', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('facebook', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        facebook: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}