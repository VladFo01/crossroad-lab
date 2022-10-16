class Vehicle implements RoadUser {
    velocity: number;
    direction: Direction;
    isRoadFree: boolean;
    priority: Priority;

    constructor(vel: number, dir: Direction) {
        this.velocity = vel;
        this.direction = dir;
        this.priority = Priority.VEHICLE;
    }
    
    go(): void {
        if(this.velocity == 0) {
            this.velocity = 2;
        } else {
            console.log("Is already moving!");
        }
    }

    stop(): void {
        if(this.velocity != 0) {
            this.velocity = 0;
        } else {
            console.log("Has already stopped!");
        }
    }
}