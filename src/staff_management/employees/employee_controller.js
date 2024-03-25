import ApplicationError from "../../errorhandlers/applicationErrorHandler.js";
import EmployeeRepository from "./employee_repository.js";

export default class EmployeeController{
    
    constructor(){
        this.employeeRepository = new EmployeeRepository();
    }

    async getDetails(req, res){
        try{
            const {employeeId} = req.params;
            const employee = await this.employeeRepository.getEmployeeDetails(employeeId);
            return res.status(200).send(employee);
        }catch(err){
            if(err instanceof ApplicationError){
                return res.status(err.code).send(err.message);
            }else{
                return res.status(500).send("Some internal server error");
            }
        }
    }

    async addEmployee(req, res){
        try{
            const {personalInformation, employmentInformation} = req.body;
            await this.employeeRepository.addEmployee(personalInformation, employmentInformation);
            return res.status(201).send("Employee record added");
        }catch(err){
            return res.status(500).send("Some internal server error");
        }
    }

}