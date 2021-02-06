const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('facebook', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('facebook', options)
}

module.exports = {getToken, getAuthUrl}