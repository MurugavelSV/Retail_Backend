import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    username: String,
    email: String,
    mobileNumber: String,
    password: String
});

export const Customers = mongoose.model('Customers', customerSchema);