import OrderRepository from "./order_repository";

export default class OrderController{

    constructor(){
        this.orderRepository = new OrderRepository();
    }

    async addOrder(req, res){
        try{
            const {orderId, orderData} = req.body;
            const hashedOrderId = await bcrypt.hash(orderData, 12);
            req.session.transactionId = hashedOrderId;
            return res.status(200).send(hashedOrderId);
        }catch(err){
            return res.status(500).send("Internal server error");
        }
    }

}