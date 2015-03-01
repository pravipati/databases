var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      //username, message, roomname
      // console.log(res);
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = "";

      models.messages.post(req);
      res.status(201).send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};
