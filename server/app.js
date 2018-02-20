var express    = require("express");
var app        = express();
var path = require("path");
var publicPath = path.join(__dirname,"/../public");
var port = process.env.PORT||3000;
app.use(express.static(publicPath));

app.listen(port,()=>{
console.log("you now connected to the port " + port);
});