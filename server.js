const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
var config = require("./twitter-config/twiiter.js");
var data = require("fs").readFileSync("./images/image.jpeg");
var Base64 = require("base-64");
var fs = require("fs");

var Twitter = require("twitter-lite");

var client = new Twitter({
  consumer_key: "uLdihCW73x3gmDGMfuHgW0vse",
  consumer_secret: "HWPhAxXQqeSWklsjcdAbsSBNV4iZWU6893s9ykohbBtG4QLmxq",
  access_token_key: "1569863785913155584-0BgnbyyuNvLNVnKzFh62SHIqutU4Ug",
  access_token_secret: "zhhPAWGMP8GzJR9siy460FZoJbWGyPnE1jHOLd7x80aaX",
});

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

let uploadData = {
  'media_data': data
};

app.post("/", function (req, res) {
  res.json("Test upload image");
  // client
  //   .get("account/verify_credentials")
  //   .then(results => {
  //     console.log("results", results);
  //     client
  //       .get("favorites/list", {})
  //       .then(results => {
  //         console.log("results", results);
  //       })
  //       .catch(console.error);
  //   })
    // .catch(console.error);

  client.post('media/upload', uploadData , function(error, media, response) {
    console.log('a',error);
    // if (!error) {
    //   console.log(media);
    //   var status = {
    //     status: 'I am a tweet',
    //     media_ids: media.media_id_string
    //   }

    //   client.post('statuses/update', status, function(error, tweet, response) {
    //     if (!error) {
    //       console.log(tweet);
    //     }
    //   });
    // };
  });
});



const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
