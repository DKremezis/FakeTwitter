const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require('./Routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRouter);


app.get("/", (request, response) => {

    response.sendFile(path.join(__dirname + '/../Client/index.html'));

});

app.listen(3000);

