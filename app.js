const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path")
const app = express();

const router = express.Router();

const investmentsRoute = require("./src/routes/investments");
const segmentsRoute = require("./src/routes/segments");
const usersRoute = require("./src/routes/users");
const CONST = require("./src/constants/app");

const urlencodedParse = bodyParser.urlencoded({extended:false}); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(CONST.APP.MONGODB.URLDATABASE, {
    useNewUrlParser: true
}).then(() => {
    console.log(CONST.APP.MONGODB.MSG.SUCCESS);
}).catch((err) => {
    console.log(CONST.APP.MONGODB.MSG.ERROR + err);
});

app.use(express.static(path.join(__dirname, "public")));

app.use(router);
router.use("/investments", investmentsRoute);
router.use("/segments", segmentsRoute);
router.use("/users", usersRoute);

app.listen(CONST.APP.SERVER.PORT, () => {
    console.log(CONST.APP.SERVER.MSG.SUCCESS);
});