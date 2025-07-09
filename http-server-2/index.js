const express = require('express')
const app = express()
const port = 3000;

app.get("/route-handler", function(req, res) {
    //headers, body, query params
    //do machine learning models
    res.json({
        name:"sonali",
        age: 21
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
