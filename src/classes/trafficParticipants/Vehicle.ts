import { SignForInteraction } from '../signs/SignForInteraction';
import { RoadUser } from './RoadUser';

export class Vehicle extends RoadUser {
  public move(): boolean | string {
    const xCurrent = this.cell.xCoordinate; // поточні координати
    const yCurrent = this.cell.yCoordinate;

    if (this.cell.getSign && this.cell.getSign instanceof SignForInteraction) {
      this.cell.getSign.callback(this);
    }

    let xNew: number;
    let yNew: number; // кінцеві координати

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
      case 'Right':
        xNew = xCurrent + this.currentVelocity;
        yNew = yCurrent;
        break;
      default:
        console.log(`Cannot recognize direction ${this.direction}`);
        return false;
    }

    const nextCell = this.cell.getMatrix.getCell(xNew, yNew);

    // якщо вийшли за краї матриці
    if (!nextCell) {
      this.cell.setUser = null; // звільнення старої клітинки
      return 'out of bounds';
    }

    // якщо по ній не можна проїхати
    if (!nextCell.getCover.canDrive) return false;

    // якщо наступна клітинка зайнята
    if (nextCell.getUser) return false;

    this.cell.setUser = null; // звільнення старої клітинки

    this.cell = nextCell;
    this.cell.setUser = this;

    return true;
  }
}