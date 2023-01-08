import Cell from '../roadElements/Cell';

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
