import RoadMatrix from '../../classes/roadElements/RoadMatrix';

export default class MatrixPrinter {
  private matrix: RoadMatrix;

  constructor(matrix: RoadMatrix) {
    this.matrix = matrix;
  }

  public print(): void {
    for (let i = 0; i < this.matrix.scale; i++) {
      for (let j = 0; j < this.matrix.scale; j++) {
        // print element based on covering of the sell
        switch (this.matrix.getCell(j, i).covering) {
          case 'Nothing':
            process.stdout.write('  ');
            break;
          case 'Road':
            process.stdout.write('R ');
            break;
          case 'Crossroad':
            process.stdout.write('C ');
            break;
          case 'Walkside':
            process.stdout.write('W ');
            break;
          default:
            console.log(`Cannot recognize covering ${this.matrix.getCell(i, j).covering}`);
            return;
        }        
      }
      process.stdout.write('\n');
    }
    console.log("All matrix was printed");
  }
}
