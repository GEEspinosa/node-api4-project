require('dotenv').config()



const server = require('./api/server.js')

const port = process.env.PORT || 9000 //fall back port

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})