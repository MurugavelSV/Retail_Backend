import express from "express";
import CustomerController from "./customer_controller.js";

const customerController = new CustomerController();
const router = express.Router();


router.post("/sendOtp", (req, res) => {
    customerController.verifyUser(req, res);
})

router.post("/signin", (req, res) => {
    customerController.signIn(req, res);
});

router.post("/signup", (req, res) => {
    customerController.signUp(req, res);
})

router.get('/get-details', (req, res) => {
    customerController.getDetails(req, res);
});

router.patch('/update-user', (req, res) => {
    customerController.updateUser(req, res);
});

export default router;