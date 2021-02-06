const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('amazon', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('amazon', options)
}

module.exports = {getToken, getAuthUrl}