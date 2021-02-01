let cred = {
    google: {
        client_id: '916671016794-3pd46ugeibu22bjgg5o33uq19cdfo4qa.apps.googleusercontent.com',
        client_secret: 'yD-6UADTjc63T6Owp6y_PTPv',
        redirect_uri: 'https://google.com',
        scope: ['profile', 'email'],
        response_type: 'code'
    },
    microsoft: {
        client_id: '55084399-9d3b-4435-acc2-2685fa14dbb2',
        client_secret: 'OfDR~5Dj1UpqS-O7-Uy5R8AVCE45~5TyA8',
        redirect_uri: 'https://google.com',
        scope: ['openid', 'email'],
        response_type: 'code'
    },
    discord: {
        client_id: '801042312968798218',
        client_secret: 'lL3CJbrEHzrcZMESC1CxvR3SbRBj4eVT',
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    facebook: {
        client_id: '1057764608026149',
        client_secret: '8bbfd1cdc43cbd6d93d3fefc74488af4',
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    github: {
        client_id: 'Iv1.001b131d9b0fb90e',
        client_secret: '8cea019ba6e04b220af0110695d59b22a8def06f',
        redirect_uri: 'https://google.com',
        scope: ['email'],
        response_type: 'code'
    },
    amazon: {
        client_id: 'amzn1.application-oa2-client.fce95a46abc14087b729bae87b8ec0b0',
        client_secret: 'cc35c057b48e8336258606889aadffa3cf9d6cac7e46dd0fab6383cb94885216',
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