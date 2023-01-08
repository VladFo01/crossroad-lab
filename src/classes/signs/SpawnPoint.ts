import { Direction } from '../../utils/constants/Direction';
import entitySpawner from '../../services/EntitySpawner';
import { SignWithState, SignWithStateProps } from './SignWithState';
import { Occupier } from '../../utils/constants/Occupier';
import { delay } from '../../utils/helpers/delay';

interface SpawnPointProps extends SignWithStateProps {
  dir: Direction;
  occupier: Occupier;
}

export class SpawnPoint extends SignWithState {
  private dir: Direction;
  private occupier: Occupier;

  constructor({ cell, dir, cooldown, image, occupier }: SpawnPointProps) {
    super({ cell, image, cooldown });
    this.dir = dir;
    this.occupier = occupier;

    this.spawnRoadUser();
  }

  public async spawnRoadUser() {
    if (this.canChangeState()) {
      entitySpawner.spawn(this.cell, this.occupier, this.dir);
    }

    await delay(1000);
    this.spawnRoadUser();
  }
}
