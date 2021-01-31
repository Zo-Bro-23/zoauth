const getAuthUrls = require('./getAuthUrls')
const {cred, setCredentials} = require('./setCredentials')

setCredentials({microsoft: {
  client_secret: '',
  client_id: '',
  redirect_uri: '', 
  response_type: '',
  scope: []
}})

console.log(getAuthUrls('google', {}))