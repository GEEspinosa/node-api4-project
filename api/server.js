const express = require('express');
const server = express();
server.use(express.json());

let user = [
    {name: 'Johz', password: 12},
    {name: 'Saldy', password: 79},
    {name: 'Frud', password: 543}
]

server.get('/api/users', (req, res) => {
    res.status(200).json(user)
})

server.post('/api/register', (req, res) => {
    user.push(req.body)
    res.status(200).json({
        Added: req.body,
    })    
})

server.post('/api/login', (req, res) => {   
    const userCheck = req.body
    console.log(user, userCheck)
    for (let i = 0 ; i < user.length; i++) {
        if (JSON.stringify(user[i]) === JSON.stringify(userCheck)){
            res.send(`Welcome ${userCheck.name}!`)
        }
    }
})

module.exports = server