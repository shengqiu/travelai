var express = require("express");
var app = express();
var path = require("path");
var pug = require("pug");

app.set('view engine', 'pug');
app.use("/style", express.static(path.join(__dirname + '/style')));
app.use("/gfx", express.static(path.join(__dirname + '/gfx')));
app.use("/lib", express.static(path.join(__dirname + '/lib')));


const compileFunction = pug.compileFile(
    path.join(__dirname, 'template/trip.pug')
)

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/template/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/trip',function(req,res){
    res.render(path.join(__dirname, '/template/trip.pug'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000);
console.log("listening to 3000...");