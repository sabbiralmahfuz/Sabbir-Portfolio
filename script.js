var navmenus=document.getElementById('navmenus');
function hideMenu(){
    navmenus.style.right="-300px";}
function openMenu(){
    navmenus.style.right="0";
}




/*
// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',  // replace with your MySQL username
  password: 'your_password',  // replace with your MySQL password
  database: 'my_database'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);

  // Insert a new record
  const insertUserQuery = `INSERT INTO users (name, age) VALUES (?, ?)`;
  connection.query(insertUserQuery, ['Alice', 25], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      return;
    }
    console.log('User inserted with ID:', results.insertId);

    // Retrieve the inserted user
    const selectUserQuery = `SELECT * FROM users WHERE id = ?`;
    connection.query(selectUserQuery, [results.insertId], (err, rows) => {
      if (err) {
        console.error('Error retrieving user:', err);
        return;
      }
      console.log('Retrieved user:', rows[0]);

      // Close the connection
      connection.end();
    });
  });
});*/
