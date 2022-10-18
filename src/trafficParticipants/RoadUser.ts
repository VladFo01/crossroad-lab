export class RoadUser {
    protected maxVelocity: number;

    protected currentVelocity: number;       // швидкість

    protected direction: Direction;   // задання напрямку руху на площині 

    protected isRoadFree: boolean;    // для перевірки чи дозволено виконати наступний крок

    protected priority: Priority;

    constructor(vel: number, dir: Direction) {
        this.maxVelocity = vel;
        this.currentVelocity = this.maxVelocity;
        this.direction = dir;
        this.priority = Priority.PEDESTRIAN;
    }

    set setVelocity(vel: number) {
        this.currentVelocity = vel;
    }

    get getVelocity() {
        return this.currentVelocity;
    }

    get getDirection() {
        return this.direction;
    }

    get getPriority() {
        return this.priority;
    }


    go(): void {
        if (this.currentVelocity === 0) {
          this.currentVelocity = this.maxVelocity;
        } else {
          console.log('Is already moving!');
        }
      }
      
      stop(): void {
        if (this.currentVelocity !== 0) {
          this.currentVelocity = 0;
        } else {
          console.log('Has already stopped!');
        }
      }
}