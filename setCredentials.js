const dotenv = require('dotenv').config()
let cred = {
    google: {
        client_id: process.env.google_client_id,
        client_secret: process.env.google_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['profile', 'email'],
        response_type: 'code'
    },
    microsoft: {
        client_id: process.env.microsoft_client_id,
        client_secret: process.env.microsoft_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['openid', 'email'],
        response_type: 'code'
    },
    discord: {
        client_id: process.env.discord_client_id,
        client_secret: process.env.discord_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    facebook: {
        client_id: process.env.facebook_client_id,
        client_secret: process.env.facebook_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    github: {
        client_id: process.env.github_client_id,
        client_secret: process.env.github_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    amazon: {
        client_id: process.env.amazon_client_id,
        client_secret: process.env.amazon_client_secret,
        redirect_uri: 'https://google.com',
        scope: ['profile'],
        response_type: 'code'
    }
}

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