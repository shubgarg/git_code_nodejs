var express = require('express');
var expressValidator = require('express-validator');
var app = express();
 var rt=require('./routers/feedback');
// var rt0=require('./routers/feedbackdata');
 var rt1=require('./routers/friends');
 var rt2=require('./routers/index');
 var rt3=require('./routers/loginout');
rt(app);
//rt0(app);
rt1(app);
rt2(app);
rt3(app);
var datafile = require('./data/data.json');

app.set('appData',datafile);

app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle='riktech';
app.locals.allfriends=datafile.friends;
// yha hmne one dot lgaya h kuki data folder k bhar hi app h
// yha hmne index.js or friends.js file ko acess krva liya
app.use(express.static('app/public'))
//yha hmne pure public folder ko acess kr liya h with the help of this above command.

//app.use(require('./routers/index'));
//app.use(require('./routers/friends'));
//app.use(require('./routers/feedback'));
//app.use(require('./routers/feedbackdata'));
//app.use(require('./routers/api'));
app.listen(4000);
console.log('port has been set');
