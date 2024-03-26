import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
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
        startDate: {
            type: Date,
            default: Date.now()
        },
        endDate: {
            type: Date,
            default: null
        },
        position: String,
        department: String,
        employmentStatus: String,
        workLocation: String,
        reportingManager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Managers'
        }, // Later change to Types.ObjectId
        salary: Number
    }
});

export const Employees = mongoose.model('Employees', employeeSchema);