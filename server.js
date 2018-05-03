const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

// instantiate app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() =>{
    console.log("Database connection establised ..");
}).catch((err) => {
    console.log("Something wrong happened...");
    process.exit();
});

app.get('/', (req, res) => {
    res.json({
        "message": "Running .."
    });
});

//Adding custom routes
require("./app/routes/team.route")(app);

app.listen(3000, () => {
    console.log("Server is running on 3000 ..");
});