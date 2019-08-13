const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path")
const app = express();
const Users = require("./src/routes/users");
const Investments = require("./src/routes/investments");
const Segments = require("./src/routes/segments");

app.use(session({
    secret: "senha123",
    resave: true,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    console.log("success_msg");// "locals" serve para criar variaveis globais
    console.log("error_msg");
    next();
});

const urlencodedParse = bodyParser.urlencoded({extended:false}); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/microservice", {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected with success !");
}).catch((err) => {
    console.log("There was an error connecting !" + err);
});

app.use(express.static(path.join(__dirname, "public")));

// app.use("/user", urlencodedParse, Users);
// app.use("/segment", urlencodedParse, Segments);
// app.use("/investments", urlencodedParse, Investments);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server running in http://localhost:8080");
});