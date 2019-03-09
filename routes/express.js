//THIS IS THE SERVER CODE

const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 8080;

const tables = [];
const waiting = [];

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

tables.push({name: "bob", 'phone-number': "9999",  email: "ew@dfs"})
waiting.push({ name: "Sue", 'phone-number': "123123123", email: "suesemail@dfs" })

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));
})
app.get('/:myRoute', function (req, res) {
    const page = req.params.myRoute;
    res.sendFile(path.join(__dirname, "../public/" +page + '.html'));
    console.log("you hit " + page);
});


app.listen(PORT, function() {
    console.log("server is linstening on http://localhost" + PORT);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waiting);
});

// Displays reserved tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});


