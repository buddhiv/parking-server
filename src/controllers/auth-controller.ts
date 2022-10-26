import { IUser } from "@models/User";
import authService from "@services/auth-service";
import { Request, Response } from "express";
import httpStatus from 'http-status';

async function loginUser(request: Request, response: Response) {
    try {
        const { username, password } = request.body;

        const tokenData = await authService.loginUser(username, password);

        response.status(httpStatus.OK).json(tokenData);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

async function signUpUser(request: Request, response: Response) {
    try {
        const { id, name, email, password } = request.body;

        const result = await authService.signUpUser(id, name, email, password);

        console.log('result', result);

        response.status(httpStatus.OK).json(result);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.BAD_REQUEST);
    }
}

export default {
    loginUser,
    signUpUser
} as const;
