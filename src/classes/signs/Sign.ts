import Cell from '../roadElements/Cell';
import { RoadUser } from '../trafficParticipants/RoadUser';

export interface SignProps {
  image?: string;
}

export class Sign {
  protected cell: Cell;
  protected image?: string;

  constructor({ image }: SignProps) {
    this.image = image;
  }

  // eslint-disable-next-line class-methods-use-this
  public callback(roadUser: RoadUser): RoadUser {
    return roadUser;
  }
}
