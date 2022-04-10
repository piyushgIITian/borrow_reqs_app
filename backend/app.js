const express = require('express');
const mongoose = require('mongoose');
const mongoAtlasUri = "mongodb+srv://piyushgautam:sCMyRVUx5BxKeX0r@cluster0.urirc.mongodb.net/Borrow?retryWrites=true&w=majority"
// const localuri = "mongodb://localhost:27017/borrowreq"
const app = express();
var bodyParser = require('body-parser');
var cors = require("cors");

app.use(cors())
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

const borrowRouter = require('./routes/borrow')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/borrow',borrowRouter)
app.get("/", function(req, res) {
    res.send("Hello World");
  });
  var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  app.listen(server_port,server_host, function() {
      console.log('Listening on port %d', server_port);
  });