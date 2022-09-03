var express=require('express');
var path=require('path');
var fs=require('fs');
var app=express();
var http = require('http').Server(app);
const io=require("socket.io")(http);
const bodyParser=require("body-parser");
var router=require('./Router/routing');
app.use("/Public", express.static(__dirname + '/Public'));
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.set("views",__dirname+"/views");
app.get("/secret"
,function(req,res)
{
    res.sendFile(__dirname+"/views/secret.html");
});
app.use("/",router);
app.listen(4000,function(err)
{
    if(err)
    {
        throw err;
    }
    console.log("Working...")
});