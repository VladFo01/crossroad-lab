import { Direction } from '../../utils/constants/Direction';
import entitySpawner from '../../services/EntitySpawner';
import { SignWithState, SignWithStateProps } from './SignWithState';
import { Occupier } from '../../utils/constants/Occupier';
import { delay } from '../../utils/helpers/delay';
import Cell from '../roadElements/Cell';

interface SpawnPointProps extends SignWithStateProps {
  cell: Cell;
  dir: Direction;
  occupier: Occupier;
}

export class SpawnPoint extends SignWithState {
  private cell: Cell;
  private dir: Direction;
  private occupier: Occupier;

  constructor({ cooldown, image, cell, dir, occupier }: SpawnPointProps) {
    super({ cooldown, image });
    this.cell = cell;
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
