const apple = 'https://appleid.apple.com/auth/authorize'
const discord = 'https://discord.com/api/oauth2/authorize'
const facebook = 'https://www.facebook.com/v9.0/dialog/oauth'
const github = 'https://github.com/login/oauth/authorize'
const google = 'https://accounts.google.com/o/oauth2/v2/auth'
const microsoft = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
const axios = require('axios')
const cred = require('setCredentials')

const urls = {apple: apple, discord: discord, facebook: facebook, github: github, google: google, microsoft: microsoft}

function generateAuthUrl(company, options){
axios.get(urls[company], {
client_id: cred[company].client_id,
cllient_secret: cred[company].client_id,
redirect_uri: cred[company].client_id,
scope: cred[company].client_id,
response_type: cred[company].client_id,
}.merge(options))
}