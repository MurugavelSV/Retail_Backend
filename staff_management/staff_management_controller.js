import StaffRepository from "./staff_management_repository.js";

export default class StaffController{
    
    constructor(){
        this.staffRepository = new StaffRepository();
    }

}