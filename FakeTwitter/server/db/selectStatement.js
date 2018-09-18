const sequelize = require('./../config/database');

const selectStatement = (attributes, table, whereStatement) => {
    return new Promise((resolve, reject) => {
        let values = attributes[0];

        for (let i = 1; i < attributes.length; i++) {
            values = values + ', ' + attributes[i];
        }

        sequelize.query(`SELECT ${values} FROM ${table} ${whereStatement}`, { type: sequelize.QueryTypes.SELECT }).then(result => {
            resolve(result);
        }).catch((error) => {
            reject('Something went wrong with selecting from the database.');
        });
    });
};

export default selectStatement;
