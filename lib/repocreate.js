const fs = require('fs-extra')

console.log("Contruct: ", process.argv[2])
// Async with promises:
fs.copy('./example/values', process.argv[2])
    .then(() => console.log('success!'))
    .catch(err => console.error(err))