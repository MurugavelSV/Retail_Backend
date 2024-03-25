import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
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
        employeeId: String,
        startDate: Date,
        endDate: {
            type: Date,
            default: Date.now()
        },
        position: {
            type: String,
            default: "Manager"
        },
        department: String,
        workLocation: String,
        salary: Number
    }
});

export const Managers = mongoose.model('Managers', managerSchema);