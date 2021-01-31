let cred = {google: {
client_id: '916671016794-3pd46ugeibu22bjgg5o33uq19cdfo4qa.apps.googleusercontent.com', 
client_secret: 'yD-6UADTjc63T6Owp6y_PTPv', 
redirect_uri: 'https://google.com', 
scope: ['profile', 'email'], 
response_type: 'code'
}}

function setCredentials(credentials){
  cred = credentials
for(key in cred){
  cred[key].scope = cred[key].scope.join(' ')
}
}

module.exports = cred