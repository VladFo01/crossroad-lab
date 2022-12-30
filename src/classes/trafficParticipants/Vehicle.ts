import { Direction } from '../../utils/constants/Direction';
import Cell from '../roadElements/Cell';
import { RoadUser } from './RoadUser';

export class Vehicle extends RoadUser {
  public move(): boolean | string {
    let xCurrent = this.cell.xCoordinate; // поточні координати
    let yCurrent = this.cell.yCoordinate;

    let xNew: number, yNew: number; // кінцеві координати

    switch (
      this.direction // обчислення наступних координат
    ) {
      case 'Up':
        xNew = xCurrent;
        yNew = yCurrent - this.currentVelocity;
        break;
      case 'Down':
        xNew = xCurrent;
        yNew = yCurrent + this.currentVelocity;
        break;
      case 'Left':
        xNew = xCurrent - this.currentVelocity;
        yNew = yCurrent;
        break;
      case 'Down':
        xNew = xCurrent + this.currentVelocity;
        yNew = yCurrent;
        break;
      default:
        console.log(`Cannot understand direction ${this.direction}`);
        return false;
    }

    let nextCell = this.cell.getMatrix.getCell(xNew, yNew);
    
    if (!nextCell) {  // якщо вийшли за краї матриці
      this.cell.setOccupation = null;  // звільнення старої клітинки
      return "out of bounds";
    }

    if(!nextCell.getCover.canDrive) // якщо по ній не можна проїхати
      return false;

    if(nextCell.occupation)
      return false;

    this.cell.setOccupation = null;  // звільнення старої клітинки

    this.cell = nextCell;

    return true;
  }
}
