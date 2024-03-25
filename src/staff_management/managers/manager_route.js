import express from "express";
import ManagerController from "./employee_controller.js";

const managerController = new ManagerController();
const router = express.Router();

router.get('/get-details/:managerId', (req, res) => {
    managerController.getDetails(req, res);
});

router.post('/add-manager', (req, res) => {
    
})


export default router;