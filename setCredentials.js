let cred = require('./cred.json')

function setCredentials(credentials) {
    for (key in credentials) {
        for (microkey in credentials[key]) {
            if (!["client_id", "client_secret", "response_type", "scope", "redirect_uri", "grant_type", "tenant"].includes(microkey)) {
                throw `You cannot set ${microkey.charAt(0).toUpperCase() + microkey.slice(1)} as a credential for ${key.charAt(0).toUpperCase() + key.slice(1)} stupid!`
            }
        }
    }
    for (key in credentials) {
        for (microkey in credentials[key]) {
            const miniCredObject = cred[key]
            const miniCredentialsObject = credentials[key]
            miniCredObject[microkey] = miniCredentialsObject[microkey]
        }
    }
    for (key in cred) {
        if (Array.isArray(cred[key].scope)) {
        cred[key].scope = cred[key].scope.join(' ')
        }
    }
}

module.exports = {
    cred,
    setCredentials
}