import express from "express";
import StaffController from "./staff_management_controller.js";

const staffController = new StaffController();
const staffRouter = express.Router();

