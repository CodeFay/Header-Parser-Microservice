var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res) {
   // Create a landing page here!
   var language = req.headers['accept-language'];
   var shortlanguage = language.substr(0,language.indexOf(','));
   
   var software = req.headers['user-agent'];
   var start = software.indexOf('(') +1 ;
   var stop = software.indexOf(')') - start;
   var shortSoftware = software.substr(start, stop);
   
   var ipaddress = req.headers['x-forwarded-for'];
   
   
   
   var ans = {
       ipaddress: ipaddress,
       language: shortlanguage,
       software: shortSoftware,
       
   }
  
  res.send(ans);
})

/*
app.listen(8080, function() {
  console.log('Node app is running on port 8080');
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});