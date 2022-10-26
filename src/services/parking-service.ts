import parkingRepo from "@repos/parking-repo";
import e from "express";

async function toggleParking(userId: string, parkingAreaId: number, parkingSlotId: number, type: string) {
    if (type === 'add') {
        await parkingRepo.addUserParking({ userId, parkingAreaId, parkingSlotId });
    } else {
        await parkingRepo.removeUserParking({ userId, parkingAreaId, parkingSlotId });
    }
}

async function getAllParking() {
    return await parkingRepo.getAll();
}

async function getUserParking(userId: string) {
    return await parkingRepo.getByUserId(userId);
}

export default {
    toggleParking,
    getAllParking,
    getUserParking
} as const;