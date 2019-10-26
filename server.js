let express = require("express");
let bodyParser = require("body-parser");
const path = require("path");

let PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
const agreement = require("./agreement");
app.use(routes, agreement);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
