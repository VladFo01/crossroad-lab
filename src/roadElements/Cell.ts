export default class Cell {
    protected isOccupied: boolean;

    protected isRideable: boolean;

    constructor(occ: boolean, ride: boolean) {
        this.isOccupied = occ;
        this.isRideable = ride;
    }

    set setOccupation(occ: boolean) {
        this.isOccupied = occ;
    }

    get Occupation(): boolean {
        return this.isOccupied;
    }

    set Rideability(occ: boolean) {
        this.isRideable = occ;
    }

    get Rideability(): boolean {
        return this.isRideable;
    }
}