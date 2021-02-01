const getAuthUrls = require('./getAuthUrls')
const express = require('express')
const app = express()
console.log(getAuthUrls('github'))