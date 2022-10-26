/* eslint-disable @typescript-eslint/no-unsafe-return */

import jsonfile from 'jsonfile';
import { IUser } from '@models/User';
import { IParkingArea, IUserParking } from 'src/types/parking';

const dbFileName = 'database.json';


interface IDb {
    users: IUser[];
    parkingAreas: IParkingArea[],
    userParking: IUserParking[]
}

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
    return jsonfile.readFile(__dirname + '/' + dbFileName);
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
    return jsonfile.writeFile((__dirname + '/' + dbFileName), db);
}

// **** Export default **** //

export default {
    openDb,
    saveDb,
} as const;
