/* eslint-disable no-param-reassign */
import Cell, { Cover } from './Cell';
import { conDirection } from '../../utils/constants/conDirection';
import RoadMatrix from './RoadMatrix';
import { Direction } from '../../utils/constants/Direction';

export default class Connection {
  size: number;
  massive: Cell[][];

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
        matrix.board[y][i].setCover = cover;    // cover setting
        matrix.board[y + 1][i].setCover = cover;
        matrix.board[y][i].setDirection = Direction.LEFT;   // direction setting
        matrix.board[y + 1][i].setDirection = Direction.RIGHT;
      }
    } else {
      for (let i = y; i < y + length; i++) {
        matrix.board[i][x].setCover = cover;    // cover setting
        matrix.board[i][x + 1].setCover = cover;
        matrix.board[i][x].setDirection = Direction.DOWN;   // direction setting
        matrix.board[i][x + 1].setDirection = Direction.UP;
      }
    }
  }
}
