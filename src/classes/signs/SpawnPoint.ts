import { Direction } from '../../utils/constants/Direction';
import entitySpawner from '../../services/EntitySpawner';
import { SignWithState, SignWithStateProps } from './SignWithState';
import { generateRandNumber } from '../../utils/helpers/generateRandNumber';
import { Occupier} from '../../utils/constants/Occupier';

interface SpawnPointProps extends SignWithStateProps {
    dir: Direction
}

export class SpawnPoint extends SignWithState {
    private dir;

    private occupier: Occupier;

    constructor({ cell, dir, cooldown, image }: SpawnPointProps, occupier: Occupier) {
        super({ cell, image, cooldown });
        this.dir = dir;
        this.occupier = occupier;
    }

    public spawnRoadUser() {
        this.cell.setOccupation = this.occupier;
        // TODO: implement setting roadUser to Cell
        // this.cell.roadUser = entitySpawner.spawn(generateRandNumber(1, 3), this.dir);
        this.timeOfNextChangeState = Date.now() + this.cooldown;
    }
}