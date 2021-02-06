const getTokenOriginal = require('./getToken')
const getAuthUrlOriginal = require('./getAuthUrls')
const getAuthUrlsOriginal = require('./getAuthUrls')

function getToken(options, config){
    return getTokenOriginal('discord', options, config)
}

function getAuthUrl(options){
    return getAuthUrlsOriginal('discord', options)
}

module.exports = {getToken, getAuthUrl}