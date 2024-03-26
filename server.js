import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDb from "./src/config/mongooseConnect.js";
import customerRouter from "./src/customer_management/customer_route.js";

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send("Welcome to Express server");
});

app.use('/users', customerRouter);

// app.use('/staff-management/staffs', staffRouter);

app.listen(8000, () => {
    console.log("App listening on port 8000");
    connectDb();
});
