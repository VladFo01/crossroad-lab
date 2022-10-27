import { RoadUser } from '../classes/trafficParticipants/RoadUser';
import { Pedestrian } from '../classes/trafficParticipants/Pedestrian';
import { Vehicle } from '../classes/trafficParticipants/Vehicle';
import { SpecialTransport } from '../classes/trafficParticipants/SpecialTransport';
import { Velocity } from '../utils/constants/Velocity';
import { Direction } from '../utils/constants/Direction';

class EntitySpawner {
    private pedestrianVel: number;

    private vehicleVel: number;

    private specialVel: number;

    constructor() {
        this.pedestrianVel = Velocity.PEDESTRIAN;
        this.vehicleVel = Velocity.VEHICLE;
        this.specialVel = Velocity.SPECIAL;
    }

    public spawn(id: number, dir: Direction): RoadUser {
        let entity: RoadUser;

        switch (id) {
            case 1:
                entity = new Pedestrian(this.pedestrianVel, dir);
                break;
            case 2:
                entity = new Vehicle(this.vehicleVel, dir);
                break;
            case 3:
                entity = new SpecialTransport(this.specialVel, dir);
                break;
            default:
                console.error(`Invalid data: id must be in scope of 1-3, your id is ${id}`);
                break;
        }

        return entity;
    }
}

export default new EntitySpawner();