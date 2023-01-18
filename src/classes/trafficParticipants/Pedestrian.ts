/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Direction } from '../../utils/constants/Direction';
import { Priority } from '../../utils/constants/Priority';
import { Velocity } from '../../utils/constants/Velocity';
import Cell from '../roadElements/Cell';
import { RoadUser, RoadUserProps } from './RoadUser';

interface PedestrianProps extends Pick<RoadUserProps, 'cell' | 'dir'> {}

export class Pedestrian extends RoadUser {
  constructor({ cell, dir }: PedestrianProps) {
    super({
      cell,
      dir,
      priority: Priority.PEDESTRIAN,
      vel: Velocity.PEDESTRIAN,
    });

    this.allowedCover = 'canWalk';
  }

  public static override createRoadUser({ cell, dir }: PedestrianProps): Pedestrian {
    return new Pedestrian({ dir, cell });
  }

  private static getOppositeDirection(direction: Direction) {
    switch (direction) {
      case Direction.DOWN:
        return Direction.UP;
      case Direction.UP:
        return Direction.DOWN;
      case Direction.LEFT:
        return Direction.RIGHT;
      default:
        return Direction.LEFT;
    }
  }

  protected override nextCellBusyHandler(nextCell: Cell): boolean {
    if (nextCell.getUser) {
      if (nextCell.getUser instanceof Pedestrian) {
        this.direction = Pedestrian.getOppositeDirection(this.direction);
        nextCell = this.calculateNextCell(this.currentVelocity);
        return true;
      }
      return false;
    }

    return true;
  }
}
