const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
//routes
app.use("/accounts", accountRoutes);




app.listen(3000);

