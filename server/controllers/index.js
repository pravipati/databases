var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      //username, message, roomname
      // console.log(req);
      // console.log(res);
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = "";
      req.on('data', function(data){
        console.log(data);
        body += data;
      });
      req.on('end', function(){
        console.log(body);
        res.status(201).send();
        //models.messages.post(body, res);
      });
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
