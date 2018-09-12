const express = require('express');
const router = express.Router();
const dbm = require('./../DatabaseManager');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

router.post('/', (req, res) =>  {

    bcrypt.hash(req.body.password, saltRounds).then( function(hash) {
        req.body.password = hash;
        console.log(hash);
        console.log(req.body);

        dbm.insertStatement(req.body, 'usersTable').then((result) => {
            console.log('Data was inserted');
        }).catch((error) => {
            console.log("something went wrong in the router file")
        });

    });

        

})

module.exports = router