import { Cell } from '../../roadClasses';

export class Sign {
    protected cell: Cell;

    protected image?: typeof Image;

    constructor(cell: Cell, image) {
        this.cell = cell;
        this.image = image;
    }


}
