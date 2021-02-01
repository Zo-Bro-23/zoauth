const getAuthUrls = require('./getAuthUrls')
const express = require('express')
const app = express()
// console.log(getAuthUrls('github'))
// app.get('/', (req, resp) => {resp.sendFile('./index.html')})
// app.listen(5210)
const data = '{ "name": "Flavio", "age": 35 }'
try {
  const user = JSON.parse(data)
} catch(err) {
  console.error(err)
}