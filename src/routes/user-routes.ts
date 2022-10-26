import userController from "@controllers/user-controller";
import express from "express";
import { validate } from 'express-validation';
import schema from "./validations";


const userRouter = express.Router();

userRouter.route('/').post(validate(schema.saveUser), userController.saveUser);
userRouter.route('/all').get(userController.getAllUsers);
userRouter.route('/:userId').get(validate(schema.getUser), userController.getUserById);

export default userRouter;
