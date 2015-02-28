var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var sql = "SELECT * FROM messages;";
      db.dbConnection.query(sql);
  //     [ { time: 'now', text: 'hello' },
  //      { time: 'now', text: 'hello' } ]
    }, // a function which produces all the messages
    post: function () {
      var sql = "INSERT INTO messages (time, text) values ('now', 'hello');";
      db.dbConnection.query(sql);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var sql = "SELECT * FROM users;";
      db.dbConnection.query(sql);
    },
    post: function () {
      var sql = "INSERT INTO users (name, friends) values ('now', 'hello');";
      db.dbConnection.query(sql);
    }
  }
};


