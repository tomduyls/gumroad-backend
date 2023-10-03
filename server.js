require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("db connected"));

app.use(express.json());

const gumroadRouter = require("./routes/gumroad");
app.use("/gumroad", gumroadRouter);

app.listen(3000, () => console.log("3000 listening..."));
