import { RoadUser } from "./RoadUser";

export class SpecialTransport extends RoadUser{
    
    constructor(vel: number, dir: Direction) {
        super(vel, dir);
        this.priority = Priority.SPECIAL;
    }
}