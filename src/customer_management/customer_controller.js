import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import otp from "otp-generator";
import CustomerRepository from "./customer_repository.js";
import ApplicationError from "../errorhandlers/applicationErrorHandler.js";

export default class CustomerController{
    constructor(){
        this.customerRepository = new CustomerRepository();
    }

    async verifyUser(req, res){
        try{
            console.log(req.body);
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "muruvel19.10@gmail.com",
                    pass: "jebd pspj yvth kqqx"
                }
            });
            const otpCode = otp.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
            const mailOptions = {
                from: "muruvel19.10@gmail.com",
                to: req.body.email,
                subject: "Verify user(OTP)",
                text: `Your One Time Password(OTP) is ${otpCode}`
            };
            // console.log(req.body);
            await transporter.sendMail(mailOptions);
            req.session.otp = otpCode;
            req.session.userInfo = req.body;
            // console.log(req.session);
            return res.status(200).send("OK");
        }catch(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }
    }

    async signUp(req, res){
        try{
            console.log(req.session.userInfo);
            console.log(req.session.otp);
            const{userName, email, mobileNumber, password} = req.session.userInfo;
            const {otp} = req.body;
            console.log(otp)
            if(req.session.otp == Number.parseInt(otp)){
                const hashedPassword = await bcrypt.hash(password, 12);
                await this.customerRepository.signUp(userName, email, mobileNumber, hashedPassword);
                return res.status(201).send("Signed in successfully");
            }else{
                throw new ApplicationError("Incorrect OTP", 400);
            }
        }catch(err){
            if(err instanceof ApplicationError){
                return res.status(err.code).send(err.message);
            }else{
                return res.status(500).send("Some internal server occured");
            }
        }
    }

    async signIn(req, res){
        try{
            const{email, password} = req.body;
            const user = await this.customerRepository.findUser(email);
            if(user){
                bcrypt.compare(password, user.password).then((isMatch) => {
                    if(isMatch){
                        const token = jwt.sign({
                            id: user._id,
                            email: user.email,
                        }, process.env.JWT_Secret, {
                            expiresIn: "1h"
                        });
                        return res.status(200).send(token);
                    }else{
                        return res.status(400).send("Invalid credentials");
                    }
                }).catch((err) => {
                    // console.log(err.message);
                    return res.status(500).send("Internal server error");
                });
            }else{
                return res.status(400).send("Invalid credentials");
            }
        }catch(err){
            return res.status(500).send("Unexpected error in the database");
        }
    }

    async getDetails(req, res){
        try{
            const {userId} = req.session.userId;
            const user = await this.customerRepository.fetchUser(userId);
            if(user){
                return res.status(200).send(user);
            }else{
                return res.status(400).send("No such user exists");
            }
        }catch(err){
            return res.status(500).send("Internal sevrer error");
        }
    }

    async updateUser(req, res){
        try{
            const {userId} = req.session.userId;
            const {userData} = req.body;
            await this.customerRepository.updateUser(userId, userData);
            return res.status(200).send("Profile updated successfully");
        }catch(err){
            return res.status(500).send("Internal server error");
        }
    }

}