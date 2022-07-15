const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// To be replaced with some cloud-based database solution (likely Atlas)
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

// Statics
app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    const db = client.db('personal-website');

    console.log(`MongoDB Connected: ${url}`);
});

app.get("/api/", (req, res, next) => {
    res.json("Hello, World!");
});

app.get("/catto", (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/catto.html'))
});