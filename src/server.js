var express=require('express')
var bodyparser=require('body-parser')
var fs = require('fs');
var app=express()

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Property-Management", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var user = new mongoose.Schema({
    name: String,
    password: String,
    dob : String    ,
    address : String,
    country : String,
    city : String,
    state : String,
    pin : Number
});

var userdata = mongoose.model("userdata", user);

app.post("/userentry", async (req, res) => {
   
     var ud= new userdata();
        ud.name = req.body.name
        ud.password = req.body.password
        ud.dob = req.body.dob
        ud.address = req.body.address
        ud.country = req.body.country
        ud.city = req.body.city
        ud.state = req.body.state
        ud.pin = req.body.pin
        ud.save(function(err, data) {
        if (err) {
          console.log("Sign up error" + err);
          res.status(500).json({
            isSucceed: false
          });
        } else {
          console.log(data);
          console.log("Sign up data successfully");
          res.status(200).json({
           isSucceed: true
          });
        }
    });
});


var pro = new mongoose.Schema({
    title: String,
    description : String,
    image : String,
    country : String,
    city : String,
    state : String,
});
var property = mongoose.model("property", pro);


app.post("/addproperty", async (req, res) => {
    console.log("property");
        var p= new property();
        p.title = req.body.title
        p.description = req.body.description
        p.image = req.body.image
        p.country = req.body.country
        p.city = req.body.city
        p.state = req.body.state

        p.save(function(err, data) {
        if (err) {
          console.log(" error" + err);
          res.status(500).json({
            isSucceed: false
          });
        } 
        else 
        {
          console.log(data);
          console.log("property added  successfully");
          res.status(200).json({
            isSucceed: true
            });
        }

    });
    
});


app.post("/userlogin", async (req, res) => {
    console.log(req.body)
    const {name,password}=req.body
    const resp=await userdata.findOne({name,password})

    if(resp)
            {
              res.status(200).json({
                isLogin: true,
                userd:resp
                    });
            }
            else{
                console.log("oh no");
                res.status(200).json({
                isLogin: false
            
                });
            
            }

});


app.post("/propertylist", async (req, res) => {
  console.log("In Propertylist List");

  property.find({ },function(err,urequest){
    if(err)
    {
        console.log("Error : propertylist")
        res.send(400)
    }
    else
    {
        console.log("propertylist request")
        res.send(urequest)

    }
 });
});




   app.listen(8000,()=>console.log('server is listening at 8000'))

