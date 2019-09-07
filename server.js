let express = require("express");
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// parse application/json
app.use(bodyParser.json());

const routes = require("./routes");
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("public"));
}

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
