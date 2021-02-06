const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('github', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('github', options)
}

module.exports = {getToken, getAuthUrl}