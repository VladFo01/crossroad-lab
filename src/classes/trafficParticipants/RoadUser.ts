import { Direction } from '../../utils/constants/Direction';
import { Priority } from '../../utils/constants/Priority';
import Cell from '../roadElements/Cell';

export class RoadUser {
  protected readonly maxVelocity: number;

  protected changeDirectionAmount: number;

  protected currentVelocity: number; // швидкість

  protected direction: Direction; // задання напрямку руху на площині

  protected isRoadFree: boolean; // для перевірки чи дозволено виконати наступний крок

  protected readonly priority: Priority | null;

  protected cell: Cell;

  constructor(cell: Cell, priority: Priority, vel: number, dir: Direction) {
    this.cell = cell;
    this.maxVelocity = vel;
    this.currentVelocity = this.maxVelocity;
    this.direction = dir;
    this.priority = priority;

    this.changeDirectionAmount = 0;
  }

  set setVelocity(vel: number) {
    this.currentVelocity = vel;
  }

  get getVelocity() {
    return this.currentVelocity;
  }

  set setDirection(dir: Direction) {
    this.direction = dir;
  }

  get getDirection() {
    return this.direction;
  }

  get getPriority() {
    return this.priority;
  }

  get getChangeDirectionAmount() {
    return this.changeDirectionAmount;
  }

  public increaseChangeDirectionAmount(): void {
    this.changeDirectionAmount++;
  }

  go(): void {
    if (this.currentVelocity === 0) {
      this.currentVelocity = this.maxVelocity;
    } else {
      console.log('Is already moving!');
    }
  }

  stop(): void {
    if (this.currentVelocity !== 0) {
      this.currentVelocity = 0;
    } else {
      console.log('Has already stopped!');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public move(): boolean | string {
    return false;
  }
}
