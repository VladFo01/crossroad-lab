class Vehicle implements RoadUser {
    id: number;
    velocity: number;
    direction: Direction;
    isRoadFree: boolean;
    priority: Priority;

    constructor(id: number, vel: number, dir: Direction) {
        this.id = id;
        this.velocity = vel;
        this.direction = dir;
        this.priority = Priority.VEHICLE;
    }
}