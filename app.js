const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path")
const app = express();

const router = express.Router();

const investmentsRoute = require("./src/routes/investments");
const segmentsRoute = require("./src/routes/segments");
const usersRoute = require("./src/routes/users");

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

app.use(router);
router.use("/investments", investmentsRoute);
router.use("/segments", segmentsRoute);
router.use("/users", usersRoute);

const PORT = 8082;
app.listen(PORT, () => {
    console.log("Server running in http://localhost:8082");
});