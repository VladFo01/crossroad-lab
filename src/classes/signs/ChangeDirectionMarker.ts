import { Direction } from '../../utils/constants/Direction';
import Cell from '../roadElements/Cell';

// class that can change current direction of any cell it is related to
export default class ChangeDirectionMarker {
  protected possibleDirection: Direction[];

  protected readonly relatedCell: Cell;

  constructor(cell: Cell) {
    this.relatedCell = cell;
    this.possibleDirection = new Array();

    if (cell.getPossibleDirection.down !== undefined) this.possibleDirection.push(Direction.DOWN);
    if (cell.getPossibleDirection.left !== undefined) this.possibleDirection.push(Direction.LEFT);
    if (cell.getPossibleDirection.right !== undefined) this.possibleDirection.push(Direction.RIGHT);
    if (cell.getPossibleDirection.up !== undefined) this.possibleDirection.push(Direction.UP);
  }

  public changeDirection(): void {
    this.relatedCell.setDirection = this.possibleDirection[Math.floor(Math.random() * 2)];
  }

  get getDirection(): Direction {
    return this.relatedCell.getDirection;
  }
}
