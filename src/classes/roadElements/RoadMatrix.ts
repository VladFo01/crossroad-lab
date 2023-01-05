import Cell from './Cell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';
import { SpawnPoint } from '../signs/SpawnPoint';
import { Occupier } from '../../utils/constants/Occupier';
import { Direction } from '../../utils/constants/Direction';
import Sidewalk from './Sidewalk';
import ChangeDirectionMarker from '../signs/ChangeDirectionMarker';

export default class RoadMatrix {
  private static instance: RoadMatrix;

  private matrix: Cell[][];

  private size: number;

  private highway: Connection[];

  private spawnpoints: SpawnPoint[];

  private sidewalks: Sidewalk[];

  private crossroads: Crossroad[];

  private directionMarkers: ChangeDirectionMarker[];

  private crosswalks: Connection[];

  private roundAbouts: RoundAbout[];

  // types of cells
  private readonly notACover = {canDrive: false, canWalk: false};
  private readonly roadCover = {canDrive: true, canWalk: false};
  private readonly sidewalkCover = {canDrive: false, canWalk: true};
  private readonly crossroadCover = {canDrive: true, canWalk: false, crossroad: true};

  protected constructor(size: number) {
    this.size = size;
    this.matrix = new Array();
    this.highway = new Array();
    this.crossroads = new Array();
    this.directionMarkers = new Array();
    this.sidewalks = new Array();
    this.crosswalks = new Array();
    this.roundAbouts = new Array();
    this.spawnpoints = new Array();
    
    // creating actual matrix
    for (let i = 0; i < this.size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = new Cell(this, null, this.notACover, i, j);
      }
    }

    // START OF THE TESTBENCH SETUP
    this.highway.push(new Connection(this, 0, 3, conDirection.Horizontal, 20, this.roadCover));
    this.highway.push(new Connection(this, 0, 15, conDirection.Horizontal, 20, this.roadCover));
    this.highway.push(new Connection(this, 4, 0, conDirection.Vertical, 20, this.roadCover));
    this.highway.push(new Connection(this, 14, 0, conDirection.Vertical, 20, this.roadCover));

    this.createCrossroad(4, 3);
    this.createCrossroad(14, 3);
    this.createCrossroad(4, 15);
    this.createCrossroad(14,15);

    this.sidewalks.push(new Sidewalk(this, 3, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 6, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 13, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 16, 0, conDirection.Vertical, 20, this.sidewalkCover));
    
    this.sidewalks.push(new Sidewalk(this, 0, 2, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 5, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 14, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 17, conDirection.Horizontal, 20, this.sidewalkCover));

    this.spawnpoints.push(new SpawnPoint({cell: this.matrix[4][0], dir: Direction.DOWN, cooldown: 3000}, Occupier.VEHICLE));
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

    let crossroad = new Crossroad(this, this.directionMarkers, 2, xCoord, yCoord, this.crossroadCover);

    this.crossroads.push(crossroad);
  }

  /* // maybe need a better solution
  setCrossroad(x: number, y: number) {
    this.matrix[x][y].setCover = Cover.CROSSROAD;
  } */

  public getCell(x: number, y: number): Cell | null {
    if (x >= this.size || y >= this.size || x < 0 || y < 0) return null;
    return this.matrix[x][y];
  }

  get board(): Cell[][] {
    return this.matrix;
  }

  get scale(): number {
    return this.size;
  }

  get getDirectionMarkers(): ChangeDirectionMarker[] {
    return this.directionMarkers;
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