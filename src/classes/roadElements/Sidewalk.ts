/* eslint-disable no-param-reassign */

import LinkedList from '../../services/LinkedList';
import { crosswalkCover, sidewalkCover } from '../../utils/constants/cellTypes';
import { conDirection } from '../../utils/constants/conDirection';
import Cell from './Cell';
import RoadMatrix from './RoadMatrix';

export default class Sidewalk {

  constructor(
    matrix: RoadMatrix,
    x: number,
    y: number,
    direction: conDirection,
    length: number
  ) {
    let list = new LinkedList<Cell>();
    
    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        if (matrix.board[y][i].getCover.canDrive) matrix.board[y][i].setCover = crosswalkCover;
        else matrix.board[y][i].setCover = sidewalkCover;
        list.pushBack(matrix.board[y][i]);
      }
    } else {
      for (let i = y; i < y + length; i++) {
        if (matrix.board[i][x].getCover.canDrive) matrix.board[i][x].setCover = crosswalkCover;
        else matrix.board[i][x].setCover = sidewalkCover;
        list.pushBack(matrix.board[i][x]);
      }
    }
    
    matrix.getMovingLines().push(list);
  }

}