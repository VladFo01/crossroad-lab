import { Direction } from '../../utils/constants/Direction';
import entitySpawner from '../../services/EntitySpawner';
import { RoadUser } from '../../trafficParticipants/RoadUser';
import { SignWithState, SignWithStateProps } from './SignWithState';

interface SpawnPointProps extends SignWithStateProps {
    dir: Direction
}

export class SpawnPoint extends SignWithState {
    private dir;

    constructor({ cell, dir, cooldown, image }: SpawnPointProps) {
        super({ cell, image, cooldown });
        this.cooldown = cooldown;
        this.dir = dir;
    }

    public spawnRoadUser() {
        this.cell.setOccupation = true;
        // TODO: implement setting roadUser to Cell
        // this.cell.roadUser = entitySpawner.spawn(Math.ceil(Math.random() * 3), this.dir);
        this.timeOfNextChangeState = Date.now() + this.cooldown;
    }
}