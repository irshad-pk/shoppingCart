'use strict';
var util = require('util');
var moment = require('moment');


module.exports = {
  login
};

function login(req, res) {
  var id = req.body.id;
  var pwd=req.body.pwd;
  var reslogin={};
  if(id=="user1"&&pwd=="password"){
   reslogin.message="Welcome "+ id + " you are logged in since "+ moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   reslogin.status="success";
  }
  else {
   reslogin.status="incorrect id or password";
  }
  res.json(reslogin);
}
