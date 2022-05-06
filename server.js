const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // urlencoded method is used when we want the data to be collected from html form.

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});

app.post("/", (req, res) => {
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The sum of the two numbers is: " + result);
});


// app.get("/bmicalculator", (req, res) => {
//     res.sendFile(__dirname + "/bmiCalculator.html");
// });

// app.post("/bmicalculator", (req, res) => {
//     // res.send("Thanks for using my Calculator...");
//     var weight= req.body.weight;
//     var height = req.body.height;

//     var result = weight / (height*height);

//     res.send("The BMI for the given data is: " + result);
// });

app.listen("3000",()=>{
    console.log("Server set up on port 3000...");
});
