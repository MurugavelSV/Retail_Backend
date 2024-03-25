import ApplicationError from "../../errorhandlers/applicationErrorHandler.js";
import ManagerRepository from "./manager_repository.js";

export default class ManagerController{
    
    constructor(){
        this.managerRepository = new ManagerRepository();
    }

    async getDetails(req, res){
        try{
            const {managerId} = req.params;
            const manager = await this.managerRepository.getManagerDetails(managerId);
            return res.status(200).send(manager);
        }catch(err){
            if(err instanceof ApplicationError){
                return res.status(err.code).send(err.message);
            }else{
                return res.status(500).send("Some internal server error");
            }
        }
    }

    async addManager(req, res){
        try{
            const {personalInformation, employmentInformation} = req.body;
            await this.managerRepository.addManager(personalInformation, employmentInformation);
            return res.status(201).send("Manager record added");
        }catch(err){
            return res.status(500).send("Some internal server error");
        }
    }

}