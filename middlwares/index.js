const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyId;

    if (username == "admin" && password == "admin") {
        if (kidneyid == 1 || kidneyId == 2) {
            res.json({
                msg: "your kidney is fine"
            })
        }
    }

    res.status(400).json({
        msg:"Something's wrong with your inputs"
    })
})
