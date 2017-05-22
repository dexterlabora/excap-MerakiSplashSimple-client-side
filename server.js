var express = require("express");
var app = express();

// Express Midleware  - BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// serve static public site files
app.use(express.static('public'));

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});


app.get("/fail", function(req, res) {
   res.sendfile('public/fail.html')
});


app.get("/success", function(req, res) {
   res.sendfile('public/success.html')
});


app.post('/form', function(req, res) {

    // Get form values
    var name = req.body.name;
    var email = req.body.email;
    var company = req.body.company;

    // Do something with the values (i.e. Save to a database)
    console.log("server: form data: name: "+name +" email "+ email + " company "+company);

    // Reply to page with values submitted and status code
    res.status(200);
    res.send(req.body.name);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
