const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('microsoft', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('microsoft', options)
}

module.exports = {getToken, getAuthUrl}