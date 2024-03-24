import express from "express";
import 'dotenv/config';
import connectDb from "./config/mongooseConnect.js";

const app = express();

app.listen(8000, () => {
    console.log("App listening on port 8000");
    connectDb();
});
