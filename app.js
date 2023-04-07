const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const authRoutes = require("./routes/auth/auth");

app.use("/auth", authRoutes);


module.exports = app;
