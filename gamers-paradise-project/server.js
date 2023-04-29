import * as dotenv from 'dotenv' 
dotenv.config()
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";



export const mongoDb = process.env.DB_CONNECTION

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("hello from homepage"));



mongoose
    .connect(mongoDb)
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
