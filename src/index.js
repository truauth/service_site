const express = require('express')
const app = express();
const IdentityApi = require('./api/Identity.js');

const userToRegister = {
    Username: 'someUser1006',
    Email: 'dev100@francoslab.xyz',
    Password: 'somepassword1235',
    Type: 1,
};

app.use([express.json()]);


app.post('/register', async (req, res) => {
    const [error, user] = IdentityApi.validateUnsafeUserPayload(req.body);
    if(error) return res.status(400).send("User Payload is malformed")

    try {
        const response = await IdentityApi.registerUser(user)
        res.send(response)
    } catch (err) {
        res.status(500).send(err)
    }

});

app.post('/login', async (req, res) => {
    const [error, user] = IdentityApi.validateLoginPayload(req.body);
    if(error) return res.status(400).send("User Payload is malformed")
    try {
        const response = await IdentityApi.login(user);
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
});

app.get('/user', async (req, res) => {
    
});


app.listen(8001, console.log('Server Running'));