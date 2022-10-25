import Cell from './Cell'
import { conDirection } from '../utils/constants/Direction';

export default class Connection  {
        
    constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
        // to do
        if (direction == conDirection.Horizontal) {
            for (var i = x; i < x + length; i++) {
                Matrix[y][i].Rideability = true;
                Matrix[y + 1][i].Rideability = true;
            }
        }
        else {
            for (var i = y; i < y + length; i++) {
                Matrix[i][x].Rideability = true;
                Matrix[i][x + 1].Rideability = true;
            }
        }
    }
}