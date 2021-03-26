const express = require("express");

const app = express();
 var  items =[];
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extented:false}));

app.set('view engine' , 'ejs');

app.get("/",function(req,res){
    var today = new Date().getDay();
    var day = "";
    // if(today.getDay === 0 || today.getDay == 0)
    // {
    //     // res.sendFile(__dirname + "/weekend.html");
    //     day = today.getDay();
    // }
    // else{
    //     // res.sendFile(__dirname +"/weekday.html");
    //     day = today.getDay();
    // }
    // switch(today){
    //     case 0:
    //         day = "SUNDAY";
    //         break;
         
        
    //         case 1:
    //             day = "MONDAY";
    //             break;
            
    //     case 2:
    //         day = "TUESDAY";
    //         break;
        
    //         case 3:
    //             day = "WEDNESDAY";
    //             break;
            
    //     case 4:
    //         day = "THURSDAY";
    //         break;
        
    //         case 5:
    //             day = "FRIDAY";
    //             break;
            
    //     case 6:
    //         day = "SATURDAY";
    //         break;
    //         default:
    //             day = "weekend";
    // }
    var options ={
        weekday :"long",
        day : "numeric",
        month : "long"
    };

    var day = new Date().toLocaleDateString("en-US",options);
    res.render('list',{DAY : day,newlistitems :items });
});

app.post ("/", function(req,res){
    var item = req.body.NEWI;
    items.push(item);
    // console.log(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server statred");
});