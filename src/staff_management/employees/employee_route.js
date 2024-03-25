import express from "express";
import EmployeeController from "./employee_controller.js";

const employeeController = new EmployeeController();
const router = express.Router();

router.get('/get-details/:staffId', (req, res) => {
    employeeController.getDetails(req, res);
});

router.post('/add-employee', (req, res) => {
    
})


export default router;