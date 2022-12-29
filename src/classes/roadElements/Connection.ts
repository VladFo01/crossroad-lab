/* eslint-disable no-param-reassign */
import Cell from './Cell';
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';
import RoadMatrix from './RoadMatrix';
import { Cover } from '../../utils/constants/Cover';

export default class Connection implements OfCell {
  size: number;
  massive: Cell[][];

  constructor(matrix: RoadMatrix, x: number, y: number, direction: conDirection, length: number) {
    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        matrix.board[i][y].setCover = Cover.ROAD;
        matrix.board[i][y + 1].setCover = Cover.ROAD;
      }
    } else {
      for (let i = y; i < y + length; i++) {
        matrix.board[x][i].setCover = Cover.ROAD;
        matrix.board[x + 1][i].setCover = Cover.ROAD;
      }
    }
  }
}
