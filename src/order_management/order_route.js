import express from "express";
import OrderController from "./order_controller.js";

const router = express.Router();
const orderController = new OrderController();

router.post('/order', (req, res) => {
    orderController.addOrder(req, res);
});