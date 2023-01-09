/* eslint-disable no-param-reassign */
import Cell, { Cover } from './Cell';
import { conDirection } from '../../utils/constants/conDirection';
import RoadMatrix from './RoadMatrix';
import { Direction } from '../../utils/constants/Direction';
import LinkedList from '../../services/LinkedList';


export default class Connection {
  size: number;
  massive: Cell[][];

  constructor(matrix: RoadMatrix, x: number, y: number, direction: conDirection, length: number, cover: Cover) {
    let list1 = new LinkedList<Cell>();
    let list2 = new LinkedList<Cell>();

    if (direction === conDirection.Horizontal) {
      for (let i = x; i < x + length; i++) {
        matrix.board[y][i].setCover = cover;
        matrix.board[y + 1][i].setCover = cover;
        
        list1.pushBack(matrix.board[y][i]);
        list2.pushBack(matrix.board[y + 1][i]);
      }
    } else {
      for (let i = y; i < y + length; i++) {
        matrix.board[i][x].setCover = cover;
        matrix.board[i][x + 1].setCover = cover;
        
        list1.pushBack(matrix.board[i][x]);
        list2.pushBack(matrix.board[i][x + 1]);
      }
    }
    matrix.getMovingLines().push(list1);
    matrix.getMovingLines().push(list2);
  }
}