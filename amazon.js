const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('amazon', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('amazon', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('amazon', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        amazon: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}