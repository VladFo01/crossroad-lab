/* eslint-disable no-param-reassign */

import { crossroadCover } from '../../utils/constants/cellTypes';
import { Direction } from '../../utils/constants/Direction';
import { SignToChangeDirection } from '../signs/SingToChangeDirection';
import { Cover } from './Cell';
import RoadMatrix from './RoadMatrix';

export default class Crossroad {
  size: number;

  protected roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, size: number, x: number, y: number) {
    this.size = size;

    let currentIter = 0;
    let mainDirection: Direction;
    for (let i = x; i <= x + 1; i++) {
      if (++currentIter === 1) {
        mainDirection = Direction.DOWN;
      } else {
        mainDirection = Direction.UP;
      }

      roadMatrix.board[y][i].setCover = crossroadCover;
      roadMatrix.board[y][i].setSign = new SignToChangeDirection({
        cell: roadMatrix.board[y][i],
        possibleDirections: [mainDirection, Direction.LEFT],
      });

      roadMatrix.board[y + 1][i].setCover = crossroadCover;
      roadMatrix.board[y + 1][i].setSign = new SignToChangeDirection({
        cell: roadMatrix.board[y + 1][i],
        possibleDirections: [mainDirection, Direction.RIGHT],
      });
    }
    this.roadMatrix = roadMatrix;
  }

  get road(): RoadMatrix {
    return this.roadMatrix;
  }
}