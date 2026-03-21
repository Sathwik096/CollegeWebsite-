var mysql = require('mysql2');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Y1012Jqkhkp",
    database : "school"
});
con.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to database");

        // Query to retrieve all records from the 'student' table
        con.query('SELECT * FROM student', function(err, results){
            if (err) {
                console.error("Error executing query:", err);
            } else {
                console.log("Retrieved records:", results);

                // Process the retrieved records here
                //for (const row of results)
                 //{                    console.log(results);                }
            }

            // Close the connection after querying
            con.end();
        });
    }
});