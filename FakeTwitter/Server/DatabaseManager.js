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

        if (attributes.length > 1) {

            for (let i = 1; i < attributes.length; i++) {
                values = values + ', ' + attributes[i];
            }

        }

        sequelize.query(`SELECT ${values} from ${table} ${whereStatement}`, { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                resolve(result);
            }).catch((error) => {
                reject('Something went wrong with selecting from database');
            });

    });

}

selectStatement(['userID', 'username', 'email'], 'UsersTable', '').then((result) => {
    console.log(result);
});