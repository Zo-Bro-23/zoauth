const getAuthUrl = require('./getAuthUrls')
const getToken = require('./getToken')
const getDetails = require('./getDetails')
const {setCredentials} = require('./setCredentials')
const amazon = require('./amazon')
const discord = require('./discord')
const facebook = require('./facebook')
const github = require('./github')
const google = require('./google')
const microsoft = require('./microsoft')
const demoApp = require('./demoApp')
const getApi = require('./getApi')
const postApi = require('./postApi')

module.exports = {getAuthUrl, getToken, getDetails, setCredentials, amazon, discord, facebook, github, google, microsoft, demoApp, getApi, postApi}