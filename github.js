const getTokenOriginal = require('./getToken')
const getAuthUrlsOriginal = require('./getAuthUrls')
const getDetailsOriginal = require('./getDetails')
const setCredentialsOriginal = require('./setCredentials').setCredentials

function getToken(options, config) {
    return getTokenOriginal('github', options, config)
}

function getAuthUrl(options) {
    return getAuthUrlsOriginal('github', options)
}

function getDetails(options, config) {
    return getDetailsOriginal('github', options, config)
}

function setCredentials(cred) {
    return setCredentialsOriginal({
        github: cred
    })
}

module.exports = {
    getToken,
    getAuthUrl,
    getDetails,
    setCredentials
}