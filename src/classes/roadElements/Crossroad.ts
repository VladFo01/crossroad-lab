import Cell from './Cell';
import OfCell from './OfCell';
import RoadMatrix from './RoadMatrix';

export default class Crossroad implements OfCell {
  size: number;
  massive: Cell[][];

  protected roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, size: number, x: number, y: number) {
    this.size = size;
    for (let i = x; i <= x + 1; i++) {
      roadMatrix[i][y].rideability = true;
      this.massive[i][y].rideability = true;
      roadMatrix[i][y + 1].rideability = true;
      this.massive[i][y + 1].rideability = true;
    }
    this.roadMatrix = roadMatrix;
  }

  get road(): RoadMatrix {
    return this.roadMatrix;
  }
}
