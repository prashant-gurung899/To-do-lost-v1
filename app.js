  const express = require("express");
  const bodyParser = require("body-parser");

  const app = express();

  app.set('view engine', 'ejs')

  app.get('/',function(req,res){
    var today = new Date();
    var currentday = today.getDay()  ;
    var day = "";

    if(currentday === 6){
      day = "Saturday";
    }
    else if (currentday === 5) {
      day = "Friday";
    } else if (currentday === 4) {
      day = "Thursday";
    }
    else if (currentday === 3) {
      day = "Wednesday";
    }  else if (currentday === 2) {
      day = "Tuesday";
      }
    else if (currentday === 1) {
      day = "Monday";
    }     else{
        day = "Sunday";
      }
      res.render('list',{kindOfDay: day});
  })


  app.listen(3000,function(){
    console.log('Server listening at port 3000');
  })
