import { Occupiers } from "../../utils/constants/Occupiers";
export default class Cell {
    protected occupiedBy: Occupiers | null;

    protected isRideable: boolean;

    constructor(occ: Occupiers | null, ride: boolean) {
        this.occupiedBy = occ;
        this.isRideable = ride;
    }

    set setOccupation(occ: Occupiers | null) {
        this.occupiedBy = occ;
    }

    get Occupation(): Occupiers | null {
        return this.occupiedBy;
    }

    set Rideability(occ: boolean) {
        this.isRideable = occ;
    }

    get Rideability(): boolean {
        return this.isRideable;
    }
}