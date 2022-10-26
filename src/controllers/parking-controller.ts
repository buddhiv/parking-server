import parkingService from "@services/parking-service";
import { Request, Response } from "express";
import httpStatus from 'http-status';

async function toggleParking(request: Request, response: Response) {
    try {
        const { userId, parkingAreaId, parkingSlotId, type } = request.body;

        await parkingService.toggleParking(userId, parkingAreaId, parkingSlotId, type);

        return response.status(httpStatus.OK);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

async function viewAllParking(request: Request, response: Response) {
    try {
        const allParking = await parkingService.getAllParking();

        return response.status(httpStatus.OK).json(allParking);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

async function viewUserParking(request: Request, response: Response) {
    try {
        const { userId } = request.params;

        const userParking = await parkingService.getUserParking(userId);

        return response.status(httpStatus.OK).json(userParking);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

export default {
    toggleParking,
    viewAllParking,
    viewUserParking
} as const;