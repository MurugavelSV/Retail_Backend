import ApplicationError from "../../errorhandlers/applicationErrorHandler.js";
import { Managers } from "./manager_schema.js";

export default class ManagerRepository{
    
    async getManagerDetails(managerId){
        const manager = await Managers.findOne({managerId});
        if(manager){
            return manager;
        }else{
            throw new ApplicationError("No such user exists", 404);
        }
    }

    async addManager(personalInformation, employmentInformation){
        const newManager = new Managers({
            personalInformation,
            employmentInformation
        });
        await newManager.save();
    }

}