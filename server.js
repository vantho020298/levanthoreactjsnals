var foo = require('./api/login.json');
const express = require('express')
const server = express()

server.get('/helloword', function (req, res) {
   res.send('Hello World');
})

server.get('/login', function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    console.log(res)
    if(username === 'admin' && password === 'admin') {
        res.send(foo);
    } else {
        res.send({ error: 'Login failed'});
    }
})
server.listen(3001)