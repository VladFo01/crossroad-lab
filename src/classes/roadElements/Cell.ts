import { Direction } from '../../utils/constants/Direction';
import { Occupier } from '../../utils/constants/Occupier';
import ChangeDirectionMarker from '../signs/ChangeDirectionMarker';
import { SpawnPoint } from '../signs/SpawnPoint';
import OfCell from './OfCell';
import RoadMatrix from './RoadMatrix';

export interface Cover {
  canDrive: boolean;
  canWalk: boolean;
  crossroad?: boolean;
}

export interface MoveDirection {
  up?: boolean;
  left?: boolean;
  right?: boolean;
  down?: boolean;
}

export default class Cell implements OfCell {
  protected occupiedBy: Occupier;

  protected spawnPoint: SpawnPoint;

  protected cover: Cover;

  protected canDrive: boolean;

  protected canWalk: boolean;

  protected isCrossroad: boolean;

  protected possibleDirection: MoveDirection;

  protected actualDirection: Direction;

  protected changeDirection: ChangeDirectionMarker;

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

  set setPossibleDirection(dir: MoveDirection) {
    this.possibleDirection = dir;
  }

  set setChangeDirectionMarker(dirMark: ChangeDirectionMarker) {
    this.changeDirection = dirMark;
  }

  get getChangeDirectionMarker(): ChangeDirectionMarker {
    return this.changeDirection;
  }

  get getPossibleDirection():  MoveDirection {
    return this.possibleDirection;
  }

  set setDirection(dir: Direction) {
    this.actualDirection = dir;
  }

  get getDirection(): Direction {
    return this.actualDirection;
  }
  
  get yCoordinate(): number {
    return this.yCoord;
  }

  get xCoordinate(): number {
    return this.xCoord;
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
