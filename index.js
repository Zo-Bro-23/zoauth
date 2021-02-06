const getAuthUrl = require('./getAuthUrls')
const getToken = require('./getToken')
const {setCredentials} = require('./setCredentials')
const amazon = require('./amazon')
const discord = require('./discord')
const facebook = require('./facebook')
const github = require('./github')
const google = require('./google')
const microsoft = require('./microsoft')
const demoApp = require('./demoApp')

module.exports = {getAuthUrl, getToken, setCredentials, amazon, discord, facebook, github, google, microsoft, demoApp}