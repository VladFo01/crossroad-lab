/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Priority } from '../../utils/constants/Priority';
import { Velocity } from '../../utils/constants/Velocity';
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
  }

  public static override createRoadUser({ cell, dir }: PedestrianProps): Pedestrian {
    return new Pedestrian({ dir, cell });
  }
}
