import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("hello from homepage"));



mongoose
    .connect(
        "mongodb+srv://admin:Tef10068622!@cluster0.winnb8p.mongodb.net/gamers-paradise?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("connect to Database");
        listening;
    })
    .catch((error) => {
        console.log(error);
    });

const listening = app.listen(PORT, () =>
    console.log(`Sever running on port: http://localhost:${PORT}`)
);
