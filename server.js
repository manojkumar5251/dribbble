const express = require("express");
var app = express();
const path = require("path");

app.set("port", process.env.PORT || 7000);

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(app.get("port"), function() {
	console.log(app.get("port"));
});
