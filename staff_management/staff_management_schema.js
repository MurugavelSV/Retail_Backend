import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    personalInformation: {
        name: String,
        address: String,
        contactNo: Number,
        email: String,
        alternateNo: Number,
        dob: String,
        marriageStatus: String
    },

    employmentInformation: {
        startDate: Date,
        position: String,
        department: String,
        employmentStatus: String,
        workLocation: String,
        reportingManager: String, // Later change to Types.ObjectId
        salary: Number
    }
})