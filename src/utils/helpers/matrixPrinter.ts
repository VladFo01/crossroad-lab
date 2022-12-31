import RoadMatrix from '../../classes/roadElements/RoadMatrix';
import { Occupier } from '../constants/Occupier';

export default class MatrixPrinter {
  private matrix: RoadMatrix;

  constructor(matrix: RoadMatrix) {
    this.matrix = matrix;
  }

  public print(): void {
    // console.clear();
    for (let i = 0; i < this.matrix.scale; i++) {
      for (let j = 0; j < this.matrix.scale; j++) {
        // print element based on covering of the sell

        if (this.matrix.getCell(i, j).occupation === Occupier.VEHICLE) {
          process.stdout.write('V ');
          continue;
        }
        if (
          this.matrix.getCell(i, j).getCover.canDrive &&
          this.matrix.getCell(i, j).getCover.canWalk
        ) {
          process.stdout.write('P ');
          continue;
        }
        if (this.matrix.getCell(i, j).getCover.crossroad) {
          process.stdout.write('C ');
          continue;
        }
        if (
          this.matrix.getCell(i, j).getCover.canDrive &&
          !this.matrix.getCell(i, j).getCover.canWalk
        ) {
          process.stdout.write('R ');
          continue;
        }
        if (
          !this.matrix.getCell(i, j).getCover.canDrive &&
          this.matrix.getCell(i, j).getCover.canWalk
        ) {
          process.stdout.write('W ');
          continue;
        }
        if (
          !this.matrix.getCell(i, j).getCover.canDrive &&
          !this.matrix.getCell(i, j).getCover.canWalk
        ) {
          process.stdout.write('  ');
          continue;
        }
        console.log(`Cannot resolve type of cover in the cell [${i},${j}]`);
        return;
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
    console.log(`\n`);
  }
}
