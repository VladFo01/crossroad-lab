import { Cover } from '../../utils/constants/Cover';
import { Occupiers } from '../../utils/constants/Occupiers';
import RoadMatrix from './RoadMatrix';
export default class Cell {
  protected occupiedBy: Occupiers;

  protected cover: Cover;

  protected readonly xCoord: number;

  protected readonly yCoord: number;

  protected readonly roadMatrix: RoadMatrix;

  constructor(
    roadMatrix: RoadMatrix,
    occ: Occupiers,
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

  set setOccupation(flag: Occupiers) {
    this.occupiedBy = flag;
  }

  get occupation(): Occupiers | null {
    return this.occupiedBy;
  }

  set setCover(cover: Cover) {
    this.cover = cover;
  }

  get covering() : Cover {
    return this.cover;
  }
  
  get yCoordinate(): number {
    return this.yCoord;
  }

  get xCoordinate(): number {
    return this.yCoord;
  }

  get matrix(): RoadMatrix {
    return this.roadMatrix;
  }
}
