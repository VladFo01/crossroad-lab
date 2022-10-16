class Pedestrian implements RoadUser {    
    id: number;
    velocity: number;
    direction: Direction;
    isRoadFree: boolean;
    
    constructor(id: number, vel: number, dir: Direction) {
        this.id = id;
        this.velocity = vel;
        this.direction = dir;
    }

    spawn(): void {
        this.constructor();
        this.isRoadFree = true;
    }
}