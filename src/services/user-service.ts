import userRepo from '@repos/user-repo';
import { IUser } from '@models/User';
import httpStatus from 'http-status';
import passwordUtility from '@util/pwd-util';

/**
 * Get all users.
 */
function getAll(): Promise<IUser[]> {
    return userRepo.getAll();
}

/**
 * Get one user by Id.
 */
function getOneById(id: string): Promise<IUser | null> {
    return userRepo.getOneById(id);
}

/**
 * Get one user by Email.
 */
 function getOneByEmail(email: string): Promise<IUser | null> {
    return userRepo.getOneByEmail(email);
}

/**
 * Add one user.
 */
function addOne(user: IUser): Promise<IUser> {
    const { password } = user;

    if (password) {
        const hashedPassword: string = passwordUtility.hashSync(password);
        user.password = hashedPassword;
    }

    return userRepo.addOne(user);
}

/**
 * Update one user.
 */
async function updateOne(user: IUser): Promise<void> {
    const persists = await userRepo.exists(user.id);
    if (!persists) {
        throw new Error();
    }
    // Return user
    return userRepo.updateOne(user);
}

/**
 * Delete a user by their id.
 */
async function deleteOne(id: string): Promise<void> {
    const persists = await userRepo.exists(id);
    if (!persists) {
        throw new Error();
    }
    // Delete user
    return userRepo.deleteOne(id);
}

// **** Export default **** //

export default {
    getAll,
    getOneById,
    getOneByEmail,
    addOne,
    updateOne,
    deleteOne
} as const;
