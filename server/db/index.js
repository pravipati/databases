// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// exports.dbConnection = mysql.createConnection({
//       user: "root",
//       password: "",
//       database: "superduperchat4"
//     });
// exports.dbConnection.connect();


var sequelize = require('sequelize');

/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var orm = new Sequelize("superduperchat4", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = orm.define('User', {
  username: Sequelize.STRING,
  id: Sequelize.INTEGER
});

var Message = orm.define('Message' {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

//creates one to many association between user and messages
User.hasMany(Message);

//creates association between message and user, adds the userID to the message table
Message.belongsTo(User);

//creates user table
User.sync();

//creates message table
Message.sync();

exports.User = User;
exports.Message = Message;



