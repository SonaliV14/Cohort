const fs= require("fs");
const express = require("express");

const app = express()
const port = 3000

app.get('/', function(req, res){
  let a=0;
  console.log("the limit has reached");
  for(let i=0;i<10000000000;i++){
    a=a+1;
  }
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})