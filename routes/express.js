//THIS IS THE SERVER CODE

const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 8080;

const tables = [];
const waiting = [];

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

tables.push({name: "bob", 'phoneNumber': "9999",  email: "ew@dfs", uniqueID:124134325})
waiting.push({ name: "Sue", 'phoneNumber': "123123123", email: "suesemail@dfs",uniqueID: 13514615 })

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

 app.post("/api/tables",function(req,res) {
    const newTable = req.body;
    if (tables.length < 5) {
        tables.push(newTable);
    } else {
        waiting.push(newTable);
    }
    res.json(tables);
});
