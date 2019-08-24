'use strict';
var util = require('util');
var moment = require('moment');
var weather = require('weather-js');


module.exports = {
  login
};

function login(req, res) {
  var id = req.body.id;
  var pwd = req.body.pwd;
  var dt = req.body.ctdate;
  var city =req.body.city;
  var reslogin = {};
  if (id == "user1" && pwd == "password") {
    weather.find({search: city, degreeType: 'c'}, function(err, result) {
      if(err){
         console.log(err);
      }
      else {
        console.log(JSON.stringify(result, null, 2));
        reslogin.weather= result[0].forecast[4].skytextday;
        reslogin.message = "Welcome " + id + " you are logged in since " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        reslogin.status = "success";
        reslogin.dateres=moment(dt,"DD/MM/YYYY").add(1, 'y').add(2, 'M').add(3, 'd').format("dddd, MMMM Do YYYY, h:mm:ss a");
        res.json(reslogin);

      }   
    });
   
  }
  else {
    reslogin.status = "incorrect id or password";
  }
}
