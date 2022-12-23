/* eslint-disable no-param-reassign */
import Cell from './Cell'
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';

export default class Connection implements OfCell{
    size: number;
    massive:Cell[][];
    constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
        // to do
        if (direction === conDirection.Horizontal) {
            for (let i = x; i < x + length; i++) {
                Matrix[y][i].Rideability = true;
                Matrix[y + 1][i].Rideability = true;
            }
        }
        else {
            for (let i = y; i < y + length; i++) {
                Matrix[i][x].Rideability = true;
                Matrix[i][x + 1].Rideability = true;
            }
        }
    }
}