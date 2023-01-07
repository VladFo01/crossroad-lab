import { SignIsFor } from '../../utils/constants/signIsFor';
import Cell from '../roadElements/Cell';
import { RoadUser } from '../trafficParticipants/RoadUser';

export interface SignProps {
  cell: Cell;
  image?: string;
  isFor?: SignIsFor;
}

export class Sign {
  protected cell: Cell;
  protected isFor?: SignIsFor;
  protected image?: string;

  constructor({ cell, image, isFor }: SignProps) {
    this.cell = cell;
    this.image = image;
    this.isFor = isFor;
  }

  // eslint-disable-next-line class-methods-use-this
  public callback(roadUser: RoadUser): RoadUser {
    return roadUser;
  }
}
