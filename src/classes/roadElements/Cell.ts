import { Occupier } from '../../utils/constants/Occupier';
import { SpawnPoint } from '../signs/SpawnPoint';
import OfCell from './OfCell';
import RoadMatrix from './RoadMatrix';

export interface Cover {
  canDrive: boolean;
  canWalk: boolean;
  crossroad?: boolean;
}

export default class Cell implements OfCell {
  protected occupiedBy: Occupier;

  protected spawnPoint: SpawnPoint;

  protected cover: Cover;

  protected canDrive: boolean;

  protected canWalk: boolean;

  protected isCrossroad: boolean;

  protected readonly xCoord: number;

  protected readonly yCoord: number;

  protected readonly roadMatrix: RoadMatrix;  

  constructor(
    roadMatrix: RoadMatrix,
    occ: Occupier,
    cover: Cover,
    x: number,
    y: number
  ) {
    this.roadMatrix = roadMatrix;
    this.occupiedBy = occ;
    this.cover = cover;
    this.xCoord = x;
    this.yCoord = y;
  }

  set setOccupation(flag: Occupier) {
    this.occupiedBy = flag;
  }

  get occupation(): Occupier | null {
    return this.occupiedBy;
  }

  set setCover(cover: Cover) {
    this.cover = cover;
  }

  get getCover(): Cover {
    return this.cover;
  }
  
  get yCoordinate(): number {
    return this.yCoord;
  }

  get xCoordinate(): number {
    return this.yCoord;
  }

  get getMatrix(): RoadMatrix {
    return this.roadMatrix;
  }

  set setSpawn(spawnPoint: SpawnPoint) {
    this.spawnPoint = spawnPoint;
  }

  get getSpawn(): SpawnPoint {
    return this.spawnPoint;
  }
}
