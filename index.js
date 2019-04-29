const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})

const helloworld = require('./dist/helloworld').default
console.log(helloworld)