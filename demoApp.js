const express = require('express')
const app = express()
const queryString = require('query-string')
const getAuthUrl = require('./getAuthUrls')
const getToken = require('./getToken')
const getDetails = require('./getDetails')
async function demoApp(){
app.use('/', express.static(`${__dirname}/files/`))
app.get('/', (req, resp) => {
    resp.sendFile('index.html', {root: __dirname})
})

app.get('/users/google', (req, resp) => {
    resp.redirect(getAuthUrl('google', {prompt: "select_account"}))
})

app.get('/users/microsoft', (req, resp) => {
    resp.redirect(getAuthUrl('microsoft', {prompt: "consent"}))
})

app.get('/users/github', (req, resp) => {
    resp.redirect(getAuthUrl('github', {prompt: "consent"}))
})

app.get('/users/facebook', (req, resp) => {
    resp.redirect(getAuthUrl('facebook'))
})

app.get('/users/amazon', (req, resp) => {
    resp.redirect(getAuthUrl('amazon'))
})

app.get('/users/discord', (req, resp) => {
    resp.redirect(getAuthUrl('discord'))
})

app.get('/callback/amazon', (req, resp) => {
    getToken('amazon', {code: req.query.code})
        .then(r => {
            getDetails('amazon', r)
                .then(res => {
                    resp.redirect(`http://localhost:5210?${'amazon'}=${encodeURIComponent(res.name)}`)
                })
                .catch(err => {resp.send(`Error at getting details: ${JSON.stringify(err)}`)})
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.get('/callback/discord', (req, resp) => {
    getToken('discord', {code: req.query.code})
        .then(r => {
            getDetails('discord', r)
                .then(res => {resp.redirect(`http://localhost:5210?${'discord'}=${encodeURIComponent(res.user.username)}`)})
                .catch(err => {
                    resp.send(`Error at getting details: ${JSON.stringify(err)}`)
                })
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.get('/callback/facebook', (req, resp) => {
    getToken('facebook', {code: req.query.code})
        .then(r => {
            getDetails('facebook', r)
                .then(res => {resp.redirect(`http://localhost:5210?${'facebook'}=${encodeURIComponent(res.name)}`)})
                .catch(err => {
                    resp.send(`Error at getting details: ${JSON.stringify(err)}`)
                })
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.get('/callback/github', (req, resp) => {
    getToken('github', {code: req.query.code}, {headers: {Accept: "application/json"}})
        .then(r => {
            getDetails('github', r)
                .then(res => {
                    resp.redirect(`http://localhost:5210?${'github'}=${encodeURIComponent(res.login)}`)
                })
                .catch(err => {
                    resp.send(`Error at getting details: ${JSON.stringify(err)}`)
                })
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.get('/callback/google', (req, resp) => {
    getToken('google', {code: req.query.code})
        .then(r => {
            getDetails('google', r)
                .then(res => {
                    resp.redirect(`http://localhost:5210?${'google'}=${encodeURIComponent(res.name)}`)
                })
                .catch(err => {
                    resp.send(`Error at getting details: ${JSON.stringify(err)}`)
                })
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.get('/callback/microsoft', (req, resp) => {
    getToken('microsoft', {code: req.query.code})
        .then(r => {
            getDetails('microsoft', r)
                .then(res => {
                    resp.redirect(`http://localhost:5210?${'microsoft'}=${encodeURIComponent(res.name)}`)
                })
                .catch(err => {
                    resp.send(`Error at getting details: ${JSON.stringify(err)}`)
                })
        })
        .catch(err => {
            resp.send(`Error at getting token: ${JSON.stringify(err)}`)
        })
})

app.listen(5210, () => {
    console.log(`
@@@@@@@@@@@@@          @@@@@@@@                           
@@@        @@@         @      @                            
@@       @@@                  @                          
      @@@           @@@@@@@@@@@@@@@                          
    @@@             @@           @@                          
  @@@               @@    @@@    @@                          
@@@@@@@@@@@@@@@@@@  @@     @     @@                          
#@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@                          
`)
setTimeout(() => {
    console.log('Welcome to ZoAuth!!')
    console.log('Visit http://localhost:5210 on your favourite browser(probably Chrome) to see your new demo app in action! Yours sincierly, the ZoAuth team!')
}, 250)})
}

module.exports = demoApp