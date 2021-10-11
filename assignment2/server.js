const express = require("express");
const app = express();
const HTTP_PORT= process.env.PORT || 8080;
const path = require("path");

app.use("/static", express.static(__dirname+"/static"));

onHttpStart = () =>{
    console.log("Express http server listening on: " + HTTP_PORT);
};

app.get("/", (req, res) =>{
res.sendFile(path.join(__dirname, "/views/home.html"));
});


app.get("/mealPackage.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/mealPackage.html"));
    });


    app.listen(HTTP_PORT, onHttpStart);