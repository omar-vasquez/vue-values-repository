#! /usr/bin/env node

const fs = require('fs-extra')

console.log("Contruct: ", process.argv[2])

/**
 * 
 * Contruct base repo.. 
 */
fs.copy('./example/values', process.argv[2] + "/values")
    .then(() => console.log('success!'))
    .catch(err => console.error(err))