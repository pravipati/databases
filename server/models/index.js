var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      var sql = "SELECT * FROM messages;";
      db.dbConnection.query(sql, function(err, rows){
        console.log(rows);
        var data = {};
        data.results = rows;
        res.write(JSON.stringify(data));
        res.status(200).send();
      });
    }, // a function which produces all the messages
    post: function (data) {
      var time = data._startTime;
      var message = data.body.text;
      var sql = "INSERT INTO messages (time, text) values ('" + time + "', '" + message + "');";
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


