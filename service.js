var express = require('express');
var cors = require('cors');
var mysql = require('mysql')
var bodyparser = require('body-parser');
const { json } = require('body-parser');
var app = express();


app.use(cors());
app.use(bodyparser.json());

var sql = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "apgnode" });

app.get("/data", function(request, response) {

    sql.query("SELECT * FROM employee", (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        data = [
            { data: [85, 72, 78, 75, 77, 75, 77, 75, 78, 72, 85, 72], label: 'Criminal Complaints', fill: false },
            { data: [10, 20, 30, 40, 50, 60, 70, 85, 98, 52, 45, 62], label: 'Domestic Complaints', fill: false },
            { data: [15, 22, 48, 35, 27, 55, 67, 75, 68, 52, 45, 32], label: 'Industry Complaints', fill: false },
        ];

        response.end(JSON.stringify(data));
    });
});





app.listen(9898);