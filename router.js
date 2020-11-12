const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("we are in the home page");
})
app.get("/about", (req, res) => {
    res.send("we are in the about page");
})
app.get("/contect", (req, res) => {
    res.send("we are in the contect page");
})
app.get("/enqurey", (req, res) => {
    res.send("we are in the enqurey page");
})
app.listen(port, () => {
    console.log(`we are using the ${port} port no`);
})