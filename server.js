//Dependencies
var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");

//Express setup
var PORT = 3000;
var app = express();

//Use Morgan NPM to log request
app.use(logger("dev"));

// Parse request JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve public folder as static content
app.use(express.static("public"));

//Mongoose and DB set up
var db = require("./models");
mongoose.connect("mongodb://localhost/MongoHeadlinesScraper", { useNewUrlParser: true });

//Route Setup
app.get("/scrape", (req, res) => {
    axios.get("https://medium.com/topic/technology").then(response => {
    var $ = cheerio.load(response.data);
    console.log($);

    db.Article.create(result)
        .then(dbArticle => {
          console.log(dbArticle);
        })
        .catch(err => {res.json(err);
        });
    });
});



// Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
  });