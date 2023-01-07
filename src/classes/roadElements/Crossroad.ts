/* eslint-disable no-param-reassign */

import { Cover } from './Cell';
import RoadMatrix from './RoadMatrix';

export default class Crossroad {
  size: number;

  protected roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, size: number, x: number, y: number, cover: Cover) {
    this.size = size;
    for (let i = x; i <= x + 1; i++) {
      roadMatrix.board[y][i].setCover = cover;
      roadMatrix.board[y + 1][i].setCover = cover;
    }
    this.roadMatrix = roadMatrix;
  }

  get road(): RoadMatrix {
    return this.roadMatrix;
  }
}
