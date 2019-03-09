//THIS IS THE SERVER CODE

const express = require('express');
const path = require("path");
const PORT = 8080;

const tables = [];
const waiting = [];

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

tables.push({name: "bob", 'phone-number': "9999",  email: "ew@dfs"})

app.get('/', function(req, res) {
    console.log(__dirname);
    let pathName = path.join(__dirname,"../public/home.html");
    console.log(pathName);
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

app.listen(PORT, function() {
    console.log("server is linstening on http://localhost" + PORT);
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });