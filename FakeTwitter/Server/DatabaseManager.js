require('dotenv').config();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mssql',
    host: process.env.DB_SERVER,
    dialectOptions: {
        encrypt: true
    },
    operatorsAliases: false
});

sequelize.authenticate().then((result) => {
    console.log('Connection Successful', result);
}).catch((errorMessage) => {
    console.log(errorMessage);
    });

var selectStatement = (attributes, table, whereStatement) => {

    return new Promise((resolve, reject) => {

        let values = attributes[0];
    
        for (let i = 1; i < attributes.length; i++) {
            values = values + ', ' + attributes[i];
        }

        sequelize.query(`SELECT ${values} from ${table} ${whereStatement}`, { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject('Something went wrong with selecting from database');
            });

    });

}


var insertStatement = (attributes, table) => {

    return new Promise((resolve, reject) => {

        let user = Object.values(attributes);

        let values;
        if (typeof user[0] === 'string') values = "'" + user[0] + "'" ;
        else values = user[0];

        for (let i = 1; i < user.length; i++) {

            if (typeof user[i] === 'string') values = values + ", '" + user[i] + "' "; 
            else values = values + ', ' + user[i];
        }

        console.log(values);
        console.log("Here are the values")

        sequelize.query(`Insert into ${table} values(${values}) `, { type: sequelize.QueryTypes.INSERT })
            .then(result => {
                resolve(result);
            }).catch((error) => {
                console.log(error); 
                reject('Something went wrong with inserting values into database', error);
            });

    });

}

module.exports = {

    selectStatement,
    insertStatement

}


//insertStatement({
//    username: 'VKREMEZIS100',
//    password: '1234',
//    email: 'dkrem@gmail.com',
//    name: 'Dimitris',
//    lastName: 'Kremezis',
//    creditCardID: 1,
//    phoneNumber: 123456789
//}, 'usersTable').then((result) => {
//    console.log(result);
//    }).catch((errorMessage) => {

//        console.log(errorMessage);

//    });

