var express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
var app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index");
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.get("/posters", (req, res) => {
    res.render("posters");
})

app.post("/results", async (req, res) => {
    console.log(req.body);
    try {
        const result = await axios.get(`https://www.omdbapi.com/?s=${req.body.movie}&apikey=47a0db19`);
        console.log(result.data.Search);
        res.render('results', {details: result.data.Search});
    } catch (error) {
console.log(error);
    }
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app running');
})