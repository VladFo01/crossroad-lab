import { RoadUser } from './RoadUser';
import { Pedestrian } from './Pedestrian';
import { Vehicle } from './Vehicle';
import { SpecialTransport } from './SpecialTransport';

class EntitySpawner {
    private pedestrianVel: number;

    private vehicleVel: number;

    private specialVel: number;

    constructor() {
        this.pedestrianVel = 1;
        this.vehicleVel = 2;
        this.specialVel = 3;
    }

    spawn(id: number, dir: Direction): RoadUser {
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
