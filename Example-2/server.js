// Simple node server serving static file
//
// auther: Akhilesh 15-01-2015
// Install Node.js and then install express 
// to access this

var port = 5000,
express = require('express'),
app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log("==================================================");
console.log('server started at port: '+port);
console.log("==================================================");