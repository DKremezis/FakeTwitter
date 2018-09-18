const router = require('express').Router();

const { insertStatement, selectStatement } = require('./../db/index');

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* POST the user into the database */
router.post('/', (req, res) =>  {
    bcrypt.hash(req.body.password, saltRounds).then((hash) => {
        req.body.password = hash;

        insertStatement(req.body, 'UsersTable').then((result) => {
            console.log('Data was inserted');
            res.status(200).send(true);
        }).catch((error) => {
            console.log("Something went wrong in the routes/user file");
            res.status(403);
        });
    });
});

module.exports = router;