const getAuthUrls = require('./getAuthUrls')
let {cred, setCredentials} = require('./setCredentials')
setCredentials({microsoft: {
  client_secret: '',
  client_id: '',
  redirect_uri: '', 
  response_type: '',
  scope: []
}})

 console.log(cred)