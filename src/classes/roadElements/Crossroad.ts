import { Cover } from '../../utils/constants/Cover';
import Cell from './Cell';
import OfCell from './OfCell';
import RoadMatrix from './RoadMatrix';

export default class Crossroad implements OfCell {
  size: number;

  protected roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, size: number, x: number, y: number) {
    this.size = size;
    for (let i = x; i <= x + 1; i++) {
      roadMatrix.board[i][y].setCover = Cover.CROSSROAD;
      roadMatrix.board[i][y + 1].setCover = Cover.CROSSROAD;      
    }
    this.roadMatrix = roadMatrix;
  }

  get road(): RoadMatrix {
    return this.roadMatrix;
  }
}
