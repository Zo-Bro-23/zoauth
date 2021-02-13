const express = require('express')
const app = express()
async function demoApp() {
    app.get('/', (req, resp) => {
        resp.sendFile('index.html', {
            root: __dirname
        })
    })

    console.log(`
@@@@@@@@@@@@@          @@@@@@@@                           
@@@        @@@         @      @                            
@@       @@@                  @                          
      @@@           @@@@@@@@@@@@@@@                          
    @@@             @@           @@                          
  @@@               @@    @@@    @@                          
@@@@@@@@@@@@@@@@@@  @@     @     @@                          
@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@                          
`)
    setTimeout(() => {
        console.log('Welcome to ZoAuth!!')
        console.log('Visit http://localhost:5210 on your favourite browser(probably Chrome) to see your new demo app in action! Yours sincierly, the ZoAuth team!')
    }, 250)
    app.listen(5210)
}

module.exports = demoApp