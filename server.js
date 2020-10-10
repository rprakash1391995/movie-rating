var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.get("/posters", (req, res) => {
    res.render("posters");
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app running');
})