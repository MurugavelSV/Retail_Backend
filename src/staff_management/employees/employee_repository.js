import ApplicationError from "../../errorhandlers/applicationErrorHandler.js";
import { Employees } from "./employee_schema.js";

export default class EmployeeRepository{
    
    async getEmployeeDetails(employeeId){
        const employee = await Employees.findOne({employeeId});
        if(employee){
            return employee;
        }else{
            throw new ApplicationError("No such user exists", 404);
        }
    }

    async addEmployee(personalInformation, employmentInformation){
        const managerId = employmentInformation.managerId;
        const newEmployee = new Employees({
            personalInformation,
            employmentInformation
        });
        await newEmployee.save();
    }

}