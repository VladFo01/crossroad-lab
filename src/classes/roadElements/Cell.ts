import { Occupiers } from '../../utils/constants/Occupiers';
import RoadMatrix from './RoadMatrix';
export default class Cell {
  protected occupiedBy: Occupiers;

  protected isRideable: boolean;

  protected isWalkable: boolean;

  protected readonly xCoord: number;

  protected readonly yCoord: number;

  protected readonly roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, occ: Occupiers, ride: boolean, x: number, y: number) {
    this.roadMatrix = roadMatrix;
    this.occupiedBy = occ;
    this.isRideable = ride;
    this.xCoord = x;
    this.yCoord = y;
  }

  set setOccupation(occ: Occupiers) {
    this.occupiedBy = occ;
  }

  get occupation(): Occupiers | null {
    return this.occupiedBy;
  }

  set rideability(occ: boolean) {
    this.isRideable = occ;
  }

  get rideability(): boolean {
    return this.isRideable;
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
