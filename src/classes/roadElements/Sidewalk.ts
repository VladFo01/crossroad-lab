/* eslint-disable no-param-reassign */

import LinkedList from '../../services/LinkedList';
import { conDirection } from '../../utils/constants/conDirection';
import Cell, { Cover } from './Cell';
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
    let list = new LinkedList<Cell>();
    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        if (matrix.board[y][i].getCover.canDrive) matrix.board[y][i].setCover = this.crosswalk;
        else matrix.board[y][i].setCover = cover;
        list.pushBack(matrix.board[y][i]);
      }
    } else {
      for (let i = y; i < y + length; i++) {
        if (matrix.board[i][x].getCover.canDrive) matrix.board[i][x].setCover = this.crosswalk;
        else matrix.board[i][x].setCover = cover;
        list.pushBack(matrix.board[i][x]);
      }
    }
    matrix.getMovingLines().push(list);
  }
}