const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: '',
    database: '',
    host: 'localhost',
    port: '3306'
});

let chirprdb = {};

chirprdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query('SELECT * FROM `card_partners`', (err, results) => {

            if (err) {
                return reject(err);
            }
            return resolve(results);

        });
    });
};

chirprdb.one = (id) => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM card_partners WHERE id = ?`,[id], (err, results) => {

            if (err) {
                return reject(err);
            }
            return resolve(results);

        });
    });
};

module.exports = chirprdb;

