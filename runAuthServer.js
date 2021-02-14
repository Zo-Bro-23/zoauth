const expressObject = require('express')
const expressApp = expressObject()
const queryString = require('query-string')
const getAuthUrl = require('./getAuthUrls')
const getToken = require('./getToken')
const getDetails = require('./getDetails')
async function runAuthServer(resolve, reject, port = 5210) {
    var error
    if (resolve == undefined) {
        throw `Err!! I give up, man! You need to give a GODDAMN CALLBACK!!!`
    }
    if (reject == undefined) {
        error = false
    } else {
        error = true
    }

    expressApp.get('/users/google', (req, resp) => {
        resp.redirect(getAuthUrl('google', {
            prompt: "select_account"
        }))
    })

    expressApp.get('/users/microsoft', (req, resp) => {
        resp.redirect(getAuthUrl('microsoft', {
            prompt: "consent"
        }))
    })

    expressApp.get('/users/github', (req, resp) => {
        resp.redirect(getAuthUrl('github', {
            prompt: "consent"
        }))
    })

    expressApp.get('/users/facebook', (req, resp) => {
        resp.redirect(getAuthUrl('facebook'))
    })

    expressApp.get('/users/amazon', (req, resp) => {
        resp.redirect(getAuthUrl('amazon'))
    })

    expressApp.get('/users/discord', (req, resp) => {
        resp.redirect(getAuthUrl('discord'))
    })

    expressApp.get('/callback/amazon', (req, resp) => {
        getToken('amazon', {
                code: req.query.code
            })
            .then(r => {
                resolve({
                    company: 'amazon',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'amazon',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.get('/callback/discord', (req, resp) => {
        getToken('discord', {
                code: req.query.code
            })
            .then(r => {
                resolve({
                    company: 'discord',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'discord',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.get('/callback/facebook', (req, resp) => {
        getToken('facebook', {
                code: req.query.code
            })
            .then(r => {
                resolve({
                    company: 'facebook',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'facebook',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.get('/callback/github', (req, resp) => {
        getToken('github', {
                code: req.query.code
            }, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(r => {
                resolve({
                    company: 'github',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'github',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.get('/callback/google', (req, resp) => {
        getToken('google', {
                code: req.query.code
            })
            .then(r => {
                resolve({
                    company: 'google',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'google',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.get('/callback/microsoft', (req, resp) => {
        getToken('microsoft', {
                code: req.query.code
            })
            .then(r => {
                resolve({
                    company: 'microsoft',
                    data: r,
                    responseObject: resp,
                    requestObject: req
                })
            })
            .catch(err => {
                if (error) {
                    reject({
                        company: 'microsoft',
                        error: err,
                        responseObject: resp,
                        requestObject: req
                    })
                }
            })
    })

    expressApp.listen(port, () => {
        console.log('Your new auth server is up and running at http://localhost:5210');
    })
}

module.exports = {
    runAuthServer,
    expressApp
}