import express from "express";
import { validate } from 'express-validation';
import schema from "./validations";
import authController from "@controllers/auth-controller";

const authRouter = express.Router();

authRouter.route('/login').post(validate(schema.loginUser), authController.loginUser);
authRouter.route('/signup').post(validate(schema.signUpUser), authController.signUpUser);

export default authRouter;
