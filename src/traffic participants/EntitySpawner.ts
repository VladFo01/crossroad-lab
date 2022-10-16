class EntitySpawner {
    spawn(id: number, dir: Direction): RoadUser {
        let entity: RoadUser;
        switch(id) {
            case 1:
                entity = new Pedestrian(1, dir);
                break;
            case 2:
                entity = new Vehicle(2, dir);
                break;
            case 3:
                entity = new SpecialTransport(3, dir);
                break;
            default:
                console.error(`Invalid data: id must be in scope of 1-3, your id is ${id}`);
                break;
        }
        return entity;
    }
}