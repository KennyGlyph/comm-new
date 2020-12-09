var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "glyph_ga",
  password: "h]Y,ZRsN&&TC"
});

con.connect(function(err) {
  if (err)
    throw err;
  console.log("Connected!");
});