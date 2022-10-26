import { IUser } from '@models/User';
import orm from './mock-orm';

/**
 * Get one user by Id.
 */
async function getOneById(id: string): Promise<IUser | null> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.id.toString() === id.toString()) {
            return user;
        }
    }
    return null;
}

/**
 * Get one user by Email.
 */
async function getOneByEmail(email: string): Promise<IUser | null> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.email.toString() === email.toString()) {
            return user;
        }
    }
    return null;
}

/**
 * See if a user with the given id exists.
 */
async function exists(id: string): Promise<boolean> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.id === id) {
            return true;
        }
    }
    return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
    const db = await orm.openDb();
    return db.users;
}

/**
 * Add one user.
 */
async function addOne(user: IUser): Promise<IUser> {
    const db = await orm.openDb();
    db.users.push(user);
    orm.saveDb(db);

    delete user.password;
    return user;
}

/**
 * Update a user.
 */
async function updateOne(user: IUser): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === user.id) {
            db.users[i] = user;
            return orm.saveDb(db);
        }
    }
}

/**
 * Delete one user.
 */
async function deleteOne(id: string): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === id) {
            db.users.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}


// **** Export default **** //

export default {
    getOneById,
    getOneByEmail,
    exists,
    getAll,
    addOne,
    updateOne,
    deleteOne
} as const;
