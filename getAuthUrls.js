const apple = 'https://appleid.apple.com/auth/authorize'
const discord = 'https://discord.com/api/oauth2/authorize'
const facebook = 'https://www.facebook.com/v9.0/dialog/oauth'
const github = 'https://github.com/login/oauth/authorize'
const google = 'https://accounts.google.com/o/oauth2/v2/auth'
const microsoft = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
const axios = require('axios')
const {cred} = require('./setCredentials')
const querystring = require('query-string')

const urls = {apple: apple, discord: discord, facebook: facebook, github: github, google: google, microsoft: microsoft}

function getAuthUrls(company, options){
for(key in cred){
  if(Array.isArray(cred[key].scope)){
    cred[key].scope = cred[key].scope.join(' ')
  }
}
 const params = {
client_id: cred[company].client_id,
cllient_secret: cred[company].client_secret,
redirect_uri: cred[company].redirect_uri,
scope: cred[company].scope,
response_type: cred[company].response_type,
 }


const final = {...params, ...options}
return `${urls[company]}?${querystring.stringify(final)}`
}

module.exports = getAuthUrls