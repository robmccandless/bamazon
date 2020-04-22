const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Saraannmcc1",
    database: 'bamazon_db',
    port: 3306
});

const type = "One"
const id = 3234
console.log(`Select ${type} from products WHERE id=${id};`)
    // need to add methods for updating (buying) and deleting 
module.exports = {
    getAll: () => {
        connection.query(
            'SELECT * FROM products',
            function(err, results, fields) {
                console.log(results.length);
            }
        );
        connection.end();
    }
}