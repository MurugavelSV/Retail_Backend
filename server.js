import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDb from "./src/config/mongooseConnect.js";
import staffRouter from "./src/staff_management/staff_management_route.js";

const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    return res.status(200).send("Welcome to Express server");
});

app.use('/staff-management/staffs', staffRouter);

app.listen(8000, () => {
    console.log("App listening on port 8000");
    connectDb();
});
