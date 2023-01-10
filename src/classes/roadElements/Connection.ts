/* eslint-disable no-param-reassign */
import Cell, { Cover } from './Cell';
import { conDirection } from '../../utils/constants/conDirection';
import RoadMatrix from './RoadMatrix';
import LinkedList from '../../services/LinkedList';
import { roadCover } from '../../utils/constants/cellTypes';


export default class Connection {
  size: number;
  massive: Cell[][];

  constructor(matrix: RoadMatrix, x: number, y: number, direction: conDirection, length: number) {
    let list1 = new LinkedList<Cell>();
    let list2 = new LinkedList<Cell>();

    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        matrix.board[y][i].setCover = roadCover;
        matrix.board[y + 1][i].setCover = roadCover;
        
        list1.pushBack(matrix.board[y][i]);
        list2.pushBack(matrix.board[y + 1][i]);
      }
    } else {
      for (let i = y; i < y + length; i++) {
        matrix.board[i][x].setCover = roadCover;
        matrix.board[i][x + 1].setCover = roadCover;
        
        list1.pushBack(matrix.board[i][x]);
        list2.pushBack(matrix.board[i][x + 1]);
      }
    }
    matrix.getMovingLines().push(list1);
    matrix.getMovingLines().push(list2);
  }
}