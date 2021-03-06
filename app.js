const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+'/public'));

app.get("/",function(req,res){
  res.render("home")
});

app.get("/projects",function(req,res){
  res.render("projects")
})

app.get("/certification",function(req,res){
  res.render("certification")
});

app.get("/skills",function(req,res){
  res.render("skills")
})
let port=process.env.PORT;
if(port==null || port ==""){
  port=3000;
}
app.listen(port , function() {
  console.log("Server started");
});
