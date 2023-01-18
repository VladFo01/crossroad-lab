import { Velocity } from '../../utils/constants/Velocity';
import { RoadUser } from './RoadUser';
import { Vehicle } from './Vehicle';
import { generateRandNumber } from '../../utils/helpers/generateRandNumber';
import { Direction } from '../../utils/constants/Direction';
import { maxChangeDirectionAmount } from '../../utils/constants/maxChangeDirectionAmount';
import { Cover } from '../roadElements/Cell';

export class Pedestrian extends RoadUser {
  public move(): boolean | string {
    const xCurrent = this.cell.xCoordinate; // поточні координати
    const yCurrent = this.cell.yCoordinate;

    const previousDirection: Direction = this.direction;

    if (this.cell.getSign) {
      this.cell.getSign.callback(this);
    }

    let xNew: number;
    let yNew: number; // кінцеві координат

    //вибір направлення

    if (this.changeDirectionAmount >= maxChangeDirectionAmount) this.direction = previousDirection;
    if (this.direction == Direction.UP && previousDirection == Direction.DOWN)
      this.direction = previousDirection;
    if (this.direction == Direction.DOWN && previousDirection == Direction.UP)
      this.direction = previousDirection;
    if (this.direction == Direction.RIGHT && previousDirection == Direction.LEFT)
      this.direction = previousDirection;
    if (this.direction == Direction.LEFT && previousDirection == Direction.RIGHT)
      this.direction = previousDirection;
    if (this.direction != previousDirection) this.changeDirectionAmount++;

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

    // якщо по ній не можна пройти
    if (!nextCell.getCover.canWalk) return false;

    //якщо світлофор не дозволяє
    if (nextCell.getTrafficLights && !nextCell.getTrafficLights.canMovePedestrian) {
      if (!this.cell.getCover.canDrive && nextCell.getCover.canDrive) return false;
    }

    // якщо наступна клітинка зайнята автомобілем
    if (nextCell.getUser instanceof Vehicle) return false;

    this.cell.setUser = null; // звільнення старої клітинки

    this.cell = nextCell;
    this.cell.setUser = this;

    return true;
  }
}
