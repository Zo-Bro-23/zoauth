//const {google} = require('google-apis')
//const axios = require('axios')
const express = require('express')
const msal = require('@azure/msal-node')
const config = {
    auth: {
        clientId: "55084399-9d3b-4435-acc2-2685fa14dbb2",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: "SD4O81MIXd23~6_-c6~-XGg2GOG4.de6pA"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
}
const msalClient = new msal.ConfidentialClientApplication(config)

app = express()

app.get('/', (req, resp) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:5210/callback",    
    }
    msalClient.getAuthCodeUrl(authCodeUrlParameters)
        .then(r => {resp.redirect(r)})
        .catch(err => {console.log(err)})

})

app.get('/callback', (req, resp) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:5210/callback",
    }
    msalClient.acquireTokenByCode(tokenRequest)
        .then(r => {resp.send(r)
            msalClient.acquireTokenByRefreshToken(r)
                .then(r => {console.log(r)})
                .catch(err => {console.log(err)})
        })
        .catch(err => {resp.send(r)})
})

app.listen(5210)