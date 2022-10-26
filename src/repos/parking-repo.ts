import { IParkingArea, IUserParking } from 'src/types/parking';
import orm from './mock-orm';

/**
 * Get all parking.
 */
async function getAll(): Promise<IParkingArea[]> {
    const db = await orm.openDb();
    return db.parkingAreas;
}

/**
 * Get parking by user Id.
 */
async function getByUserId(userId: string): Promise<IUserParking[]> {
    const db = await orm.openDb();

    const userParkingArray: IUserParking[] = [];

    for (let i = 0; i < db.userParking.length; i++) {
        if (db.userParking[i].userId === userId) {
            userParkingArray.push(db.userParking[i]);
        }
    }

    return userParkingArray;
}

/**
 * Add user parking.
 */
async function addUserParking(userParking: IUserParking): Promise<void> {
    const db = await orm.openDb();

    db.userParking.push(userParking);
    orm.saveDb(db);
}


/**
 * Remove user parking.
 */
async function removeUserParking(userParking: IUserParking): Promise<void> {
    const db = await orm.openDb();

    const index = db.userParking.findIndex((userParkingObj: IUserParking) => {
        if (userParkingObj.userId.toString() === userParking.userId.toString() &&
            userParkingObj.parkingAreaId.toString() === userParking.parkingAreaId.toString() &&
            userParkingObj.parkingSlotId.toString() === userParking.parkingSlotId.toString()) {
            return true;
        }
    });

    if (index > -1) {
        db.userParking.splice(index, 1);
    }
    orm.saveDb(db);
}

export default {
    getAll,
    getByUserId,
    addUserParking,
    removeUserParking
} as const;