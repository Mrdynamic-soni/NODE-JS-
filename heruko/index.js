const express = require("express");
const request  = require("request");

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.listen(8055);
