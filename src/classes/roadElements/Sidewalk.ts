/* eslint-disable no-param-reassign */

import { conDirection } from '../../utils/constants/conDirection';
import { Cover } from './Cell';
import RoadMatrix from './RoadMatrix';

export default class Sidewalk {
  length: number;

  private readonly crosswalk: Cover = { canDrive: true, canWalk: true };

  constructor(
    matrix: RoadMatrix,
    x: number,
    y: number,
    direction: conDirection,
    length: number,
    cover: Cover
  ) {
    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        if (matrix.board[y][i].getCover.canDrive) matrix.board[y][i].setCover = this.crosswalk;
        else matrix.board[y][i].setCover = cover;
      }
    } else {
      for (let i = y; i < y + length; i++) {
        if (matrix.board[i][x].getCover.canDrive) matrix.board[i][x].setCover = this.crosswalk;
        else matrix.board[i][x].setCover = cover;
      }
    }
  }
}
