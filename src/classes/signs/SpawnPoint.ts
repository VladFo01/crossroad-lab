import { Cell } from '../../roadClasses';
import { Direction } from '../../trafficParticipants/Direction';
import { EntitySpawner } from '../../trafficParticipants/EntitySpawner';
import { RoadUser } from '../../trafficParticipants/RoadUser';
import { Sign } from "./Sign";

export class SpawnPoint extends Sign {
    private cooldown: number

    private timeOfNextSpawn: number

    private roadUser: RoadUser

    constructor(cell: Cell, roadUserId: number, dir: Direction, cooldown: number) {
        super(cell);
        this.cooldown = cooldown;
        this.roadUser = EntitySpawner.spawn(roadUserId, dir);
    }

    public canSpawn(time: Date) {
        return this.timeOfNextSpawn <= time.getTime();
    }

    public spawnRoadUser() {
        this.cell.setOccupation = true;
        this.timeOfNextSpawn = Date.now() + this.cooldown;
    }
}