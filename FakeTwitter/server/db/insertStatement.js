const sequelize = require('./../config/database');

const insertStatement = (attributes, table) => {
    return new Promise((resolve, reject) => {
        let user = Object.values(attributes);

        let values;
        if (typeof user[0] === 'string')
            values = "'" + user[0] + "'" ;
        else
            values = user[0];

        for (let i = 1; i < user.length; i++) {
            if (typeof user[i] === 'string')
                values = values + ", '" + user[i] + "' ";
            else
                values = values + ', ' + user[i];
        }

        sequelize.query(`INSERT INTO ${table} VALUES(${values})`, { type: sequelize.QueryTypes.INSERT }).then(result => {
            resolve(result);
        }).catch((error) => {
            reject('Something went wrong with inserting values into the database.');
        });
    });
};

export default insertStatement;