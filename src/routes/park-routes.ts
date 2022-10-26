import parkingController from "@controllers/parking-controller";
import express from "express";
import { validate } from 'express-validation';
import schema from "./validations";

const parkRouter = express.Router();

parkRouter.route('/').post(validate(schema.toggleParking), parkingController.toggleParking);
parkRouter.route('/view/all').get(validate(schema.viewAllParking), parkingController.viewAllParking);
parkRouter.route('/view/:userId').get(validate(schema.viewUserParking), parkingController.viewUserParking);

export default parkRouter;
