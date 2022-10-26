import { Request, Response } from "express";
import userService from '@services/user-service';
import httpStatus from 'http-status';
import { IUser } from "@models/User";

async function getAllUsers(request: Request, response: Response) {
    try {
        console.log('all');
        const allUsers = await userService.getAll();

        console.log('allUSers', allUsers);

        return response.status(httpStatus.OK).json(allUsers);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

async function getUserById(request: Request, response: Response) {
    try {
        const { userId } = request.params;

        const allUsers: IUser | null = await userService.getOneById(userId);

        return response.status(httpStatus.OK).json(allUsers);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

async function saveUser(request: Request, response: Response) {
    try {
        const { id, name, email, password } = request.params;

        const user: IUser = await userService.addOne({ id, name, email, password });

        return response.status(httpStatus.OK).json(user);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}


export default {
    getAllUsers,
    getUserById,
    saveUser
} as const;
