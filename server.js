var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 1111;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html '}));

// Routes
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

require('./app/routing/apiRoutes.js')(app)



app.listen(PORT, () => {
    console.log('App listening on PORT' + PORT);
})