const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('google', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('google', options)
}

module.exports = {getToken, getAuthUrl}