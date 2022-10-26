import { IUser } from "@models/User";
import userService from "./user-service";
import passwordUtility from '@util/pwd-util';
import jwtUtil from "@util/jwt-util";

async function loginUser(username: string, password: string) {
    const user: IUser | null = await userService.getOneById(username);

    if (user && user.password) {
        const passwordsMatched: boolean = await passwordUtility.compare(password, user.password);

        if (passwordsMatched) {
            const jwtResult = await jwtUtil.sign({
                user: user,
                application: 'parking-server'
            });

            return {
                token: jwtResult,
                user: user
            };
        }
    }
    return null;
}

async function signUpUser(id: string, name: string, email: string, password: string) {
    const user = await userService.addOne({
        id,
        name,
        email,
        password
    });

    console.log('user', user);

    return user;
}

export default {
    loginUser,
    signUpUser
} as const;
