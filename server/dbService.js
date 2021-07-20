const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});

class DBService {
    static getDBServiceInstance() {
        return instance ? instance : new DBService();
    }
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * from names;";
                connection.query(query, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            })
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async insertNewName(name) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO names (name, date_added) VALUES (?,?);";
                connection.query(query, [name, dateAdded], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                });
            })
            console.log(insertId);
            return {
                id: insertId,
                name: name,
                dateAdded: dateAdded,
            };
        } catch (error) {
            console.log(error)
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE from names where id = ?;";
                connection.query(query, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                });
            })
            return response === 1 ? true : false;

        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE names SET name = ? where id = ?;";
                connection.query(query, [name, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                });
            })
            return response === 1 ? true : false;

        } catch (error) {
            console.log(error)
            return false;
        }
    }

}

module.exports = DBService;