let express = require("express");
let bodyParser = require("body-parser");
const path = require("path");

let PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("client/build"));
//app.use(express.static("public"));
// parse application/json

const routes = require("./routes");
app.use(routes);

if (process.env.NODE_ENV === "production") {
  console.log("prod?");
  app.use(express.static("client/build"));
  //app.use(express.static("public"));
}

app.get("*", (req, res) => {
  // console.log("catch all routes and make sure they work!!");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
