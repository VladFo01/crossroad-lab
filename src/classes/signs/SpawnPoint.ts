import Cell from '../../roadElements/Cell';
import { Direction } from '../../utils/constants/Direction';
import entitySpawner from '../../services/EntitySpawner';
import { RoadUser } from '../../trafficParticipants/RoadUser';
import { Sign, SignProps } from "./Sign";

interface SpawnPointProps extends SignProps {
    roadUserId: number
    dir: Direction
    cooldown: number
}

export class SpawnPoint extends Sign {
    private cooldown: number

    private timeOfNextSpawn: number

    private roadUser: RoadUser

    constructor({ cell, roadUserId, dir, cooldown, image }: SpawnPointProps) {
        super({ cell, image });
        this.cooldown = cooldown;
        this.roadUser = entitySpawner.spawn(roadUserId, dir);
    }

    private canSpawn(time: Date) {
        return this.timeOfNextSpawn <= time.getTime();
    }

    public spawnRoadUser() {
        this.cell.setOccupation = true;
        // TODO: implement setting roadUser to Cell
        // this.cell.roadUser = this.roadUser;
        this.timeOfNextSpawn = Date.now() + this.cooldown;
    }
}