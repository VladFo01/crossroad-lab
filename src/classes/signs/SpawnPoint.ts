import Cell from '../../roadElements/Cell';
import { Direction } from '../../utils/constants/Direction';
import entitySpawner from './EntitySpawner';
import { RoadUser } from '../../trafficParticipants/RoadUser';
import { Sign } from "./Sign";

export class SpawnPoint extends Sign {
    private cooldown: number

    private timeOfNextSpawn: number

    private roadUser: RoadUser

    constructor(cell: Cell, roadUserId: number, dir: Direction, cooldown: number) {
        super(cell);
        this.cooldown = cooldown;
        this.roadUser = entitySpawner.spawn(roadUserId, dir);
    }

    public canSpawn(time: Date) {
        return this.timeOfNextSpawn <= time.getTime();
    }

    public spawnRoadUser() {
        this.cell.setOccupation = true;
        this.timeOfNextSpawn = Date.now() + this.cooldown;
    }
}