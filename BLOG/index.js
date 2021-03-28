const  express = require ("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

let Posts = [];

const aboutMe = "Hi, there I am SAURABH SONI ,Electronics And Communication Engineering Student at Madan Mohan Malaviya University of Technology Gorakhpur.Currently i am working as an IOT developer at CODEBUGGED an AI based startup at my University";
const contact = "Hey, There you can contact me on 7234869244";


app.set ('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get("/", function(req,res){
    console.log(Posts);
    res.render('Home', {aboutMe:aboutMe ,Posts:Posts});
  
});


app.get("/POSTS", function(req,res){
    res.render('POSTS', {aboutMe:aboutMe ,Posts:Posts});
  
});

app.get("/contact", function(req,res){
    res.render('Contact',{contact:contact});
});


app.get("/About", function(req,res){
    res.render('About', {aboutMe:aboutMe});
});


app.get("/Compose",function(req,res){
    res.render('Compose');
});


app.post("/Compose",function(req,res){
 
const ToPost ={
      Titleof:  req.body.titlebody,
      Content : req.body.comment
  };

  Posts.push(ToPost);
  res.redirect("/");

});


app.get("/POSTS/:postName",function(req,res){
  const  titleNAme = _.lowerCase(req.params.postName);

  Posts.forEach(function(post){
   const titleNAME = _.lowerCase(post.Titleof);
  
   if(titleNAme === titleNAME){
       res.render('POSTS',{
        newTitle :titleNAME,
        newContent : post.Content
       });
    }
   });
});


app.listen(3000,function(){
    console.log("serever started ");
});