const dotenv = require('dotenv').config()
let cred = JSON.parse(process.env.cred)

function setCredentials(credentials) {
    for (key in credentials) {
        for (microkey in credentials[key]) {
            const miniCredObject = cred[key]
            const miniCredentialsObject = credentials[key]
            miniCredObject[microkey] = miniCredentialsObject[microkey]
        }
    }
    for (key in cred) {
        cred[key].scope = cred[key].scope.join(' ')
    }
}

module.exports = {
    cred,
    setCredentials
}