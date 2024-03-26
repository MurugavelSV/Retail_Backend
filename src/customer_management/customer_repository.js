import ApplicationError from "../errorhandlers/applicationErrorHandler.js";
import { Customers } from "./customer_schema.js";

export default class CustomerRepository{

   async signUp(userName, email, mobileNumber, password){
        const user = await Customers.findOne({email});
        if(user){
            throw new ApplicationError("User already exists", 400);
        }else{
            const newUser = new Customers({
                userName,
                email,
                mobileNumber: Number.parseInt(mobileNumber),
                password
            });
            await newUser.save();
        }
   }

   async findUser(email){
        return await Customers.findOne({email});
   }

   async fetchUser(userId){
        return await Customers.findById(userId); 
   }

   async updateUser(userId, updatedData){
        await Customers.updateOne({
            _id: userId
        }, {
            ...updatedData
        })
   }

}