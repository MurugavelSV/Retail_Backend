import express from "express";
import employeeRouter from "./employees/employee_route";
import managerRouter from "./managers/manager_route.js";

const router = express.Router();

router.use('/employee', employeeRouter);

router.use('/manager', managerRouter);

export default router;