import Cell from './Cell';
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';
import { Cover } from '../../utils/constants/Cover';

export default class RoadMatrix {
  private static instance: RoadMatrix;

  private matrix: Cell[][];

  private size: number;

  private highway: Connection[];

  private sidewalks: Connection[];

  private crossroads: Crossroad[];

  private roundAbouts: RoundAbout[];

  protected constructor(size: number) {
    this.size = size;
    this.matrix = new Array(0);
    this.highway = new Array(0);
    this.crossroads = new Array(0);
    this.sidewalks = new Array(0);
    this.roundAbouts = new Array(0);

    for (let i = 0; i < this.size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = new Cell(this, null, Cover.NO_COVER, i, j);
      }
    }

    // START OF THE TESTBENCH SETUP
    this.highway.push(new Connection(this, 0, 3, conDirection.Horizontal, 20));
    this.highway.push(new Connection(this, 0, 15, conDirection.Horizontal, 20));
    this.highway.push(new Connection(this, 4, 0, conDirection.Vertical, 20));
    this.highway.push(new Connection(this, 14, 0, conDirection.Vertical, 20));

    this.createCrossroad(4, 3);
    this.createCrossroad(14, 3);
    this.createCrossroad(4, 15);
    this.createCrossroad(14,15);
    // END OF THE TESTBENCH SETUP

    /* if (!this.Check()) {
      throw new Error('Something went wrong');
    } */

  }

  public static createOnce(size: number): RoadMatrix {
    if (!RoadMatrix.instance) RoadMatrix.instance = new RoadMatrix(size);
    return RoadMatrix.instance;
  }

  private createCrossroad(xCoord: number, yCoord: number): void | string {
    if (this.size - 2 <= xCoord || this.size - 2 <= yCoord)
      return 'Invalid coordinates for the crossroad';

    let crossroad = new Crossroad(this, 2, xCoord, yCoord);

    this.crossroads.push(crossroad);
  }

  /* // maybe need a better solution
  setCrossroad(x: number, y: number) {
    this.matrix[x][y].setCover = Cover.CROSSROAD;
  } */

  public getCell(x: number, y: number): Cell | null {
    return this.matrix[x][y];
  }

  get board(): Cell[][] {
    return this.matrix;
  }

  get scale(): number {
    return this.size;
  }

  /* Check(): boolean {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (
          this.matrix[i][j].rideability === true &&
          (this.matrix[i + 1][j].rideability === false ||
            this.matrix[i][j + 1].rideability === false ||
            this.matrix[i - 1][j].rideability === false ||
            this.matrix[i][j - 1].rideability === false)
        ) {
          return false;
        }
      }
    }
    return true;
  } */

}