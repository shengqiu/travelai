var express = require("express");
var app     = express();
var path    = require("path");

app.use("/gfx", express.static(path.join(__dirname + '/gfx')));
app.use("/lib", express.static(path.join(__dirname + '/lib')));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000);