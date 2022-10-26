export interface IParkingSlot {
    id: number,
    name: string,
    location: {
        row: number,
        column: number
    }
}

export interface IParkingArea {
    id: number,
    name: string,
    parkingSlots: IParkingSlot[]
}

export interface IUserParking {
    userId: string,
    parkingAreaId: number,
    parkingSlotId: number
}