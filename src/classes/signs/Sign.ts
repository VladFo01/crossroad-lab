import { SignIsFor } from '../../utils/constants/signIsFor';
import Cell from '../roadElements/Cell';
import { RoadUser } from '../trafficParticipants/RoadUser';

export interface SignProps {
  cell: Cell;
  image?: string;
}

export class Sign {
  protected cell: Cell;
  protected image?: string;

  constructor({ cell, image }: SignProps) {
    this.cell = cell;
    this.image = image;
  }
}
