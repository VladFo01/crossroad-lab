interface RoadUser {
    velocity: number;       // швидкість
    direction: Direction;   // задання напрямку руху на площині 
    isRoadFree: boolean;    // для перевірки чи дозволено виконати наступний крок
    readonly priority: Priority;

    go(): void;
    stop(): void;
}