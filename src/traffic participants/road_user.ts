interface RoadUser {
    readonly id: number;
    velocity: number;       // швидкість
    direction: Direction;   // задання напрямку руху на площині 
    isRoadFree: boolean;    // для перевірки чи дозволено виконати наступний крок

    spawn(): void;
}