import { Direction } from '../../utils/constants/Direction';
import { RoadUser } from './RoadUser';

export class Vehicle extends RoadUser {
  constructor(vel: number, dir: Direction) {
    super(vel, dir);
    this.priority = Priority.VEHICLE;
  }
}
