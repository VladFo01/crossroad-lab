/* eslint-disable no-continue */
/* eslint-disable consistent-return */

import Cell from './Cell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';
import { SpawnPoint } from '../signs/SpawnPoint';
import { Occupier } from '../../utils/constants/Occupier';
import Sidewalk from './Sidewalk';
import LinkedList from '../../services/LinkedList';
import { RoadUser } from '../trafficParticipants/RoadUser';

export default class RoadMatrix {
  // eslint-disable-next-line no-use-before-define
  private static instance: RoadMatrix;

  private matrix: Cell[][];
  private size: number;
  private movingLines: LinkedList<Cell>[];
  private highway: Connection[];
  private spawnpoints: SpawnPoint[];
  private sidewalks: Sidewalk[];
  private crossroads: Crossroad[];
  private crosswalks: Connection[];
  private roundAbouts: RoundAbout[];

  // types of cells
  private readonly notACover = { canDrive: false, canWalk: false };
  private readonly roadCover = { canDrive: true, canWalk: false };
  private readonly sidewalkCover = { canDrive: false, canWalk: true };
  private readonly crossroadCover = { canDrive: true, canWalk: false, crossroad: true };

  protected constructor(size: number) {
    this.size = size;
    this.matrix = [];
    this.movingLines = [];
    this.highway = [];
    this.crossroads = [];
    this.sidewalks = [];
    this.crosswalks = [];
    this.roundAbouts = [];
    this.spawnpoints = [];

    this.setMatrixCover();
  }

  private setMatrixCover() {
    // creating actual matrix
    for (let i = 0; i < this.size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < this.size; j++) {
        this.matrix[i][j] = new Cell(this, null, this.notACover, i, j);
      }
    }

    // setup highways
    this.highway.push(new Connection(this, 0, 3, conDirection.Horizontal, 20, this.roadCover));
    this.highway.push(new Connection(this, 0, 15, conDirection.Horizontal, 20, this.roadCover));
    this.highway.push(new Connection(this, 4, 0, conDirection.Vertical, 20, this.roadCover));
    this.highway.push(new Connection(this, 14, 0, conDirection.Vertical, 20, this.roadCover));

    // setup crossroads
    this.createCrossroad(4, 3);
    this.createCrossroad(14, 3);
    this.createCrossroad(4, 15);
    this.createCrossroad(14, 15);

    // settup sidewalks
    this.sidewalks.push(new Sidewalk(this, 3, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 6, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 13, 0, conDirection.Vertical, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 16, 0, conDirection.Vertical, 20, this.sidewalkCover));

    this.sidewalks.push(new Sidewalk(this, 0, 2, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 5, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 14, conDirection.Horizontal, 20, this.sidewalkCover));
    this.sidewalks.push(new Sidewalk(this, 0, 17, conDirection.Horizontal, 20, this.sidewalkCover));
  }

  public static createOnce(size: number): RoadMatrix {
    if (!RoadMatrix.instance) RoadMatrix.instance = new RoadMatrix(size);
    return RoadMatrix.instance;
  }

  private createCrossroad(xCoord: number, yCoord: number): void | string {
    if (this.size - 2 <= xCoord || this.size - 2 <= yCoord)
      return 'Invalid coordinates for the crossroad';

    const crossroad = new Crossroad(this, 2, xCoord, yCoord, this.crossroadCover);

    this.crossroads.push(crossroad);
  }

  public getCell(x: number, y: number): Cell | null {
    if (x >= this.size || y >= this.size || x < 0 || y < 0) return null;
    return this.matrix[x][y];
  }

  public getMovingLines(): LinkedList<Cell>[] {
    return this.movingLines;
  }

  get board(): Cell[][] {
    return this.matrix;
  }

  get scale(): number {
    return this.size;
  }

  public print(): void {
    // console.clear();
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        // print element based on covering of the sell

        if (this.matrix[i][j].occupation === Occupier.VEHICLE) {
          process.stdout.write('V ');
          continue;
        }
        if (this.matrix[i][j].getCover.canDrive && this.matrix[i][j].getCover.canWalk) {
          process.stdout.write('= ');
          continue;
        }
        if (this.matrix[i][j].getCover.crossroad) {
          process.stdout.write('C ');
          continue;
        }
        if (this.matrix[i][j].getCover.canDrive && !this.matrix[i][j].getCover.canWalk) {
          process.stdout.write('* ');
          continue;
        }
        if (!this.matrix[i][j].getCover.canDrive && this.matrix[i][j].getCover.canWalk) {
          process.stdout.write('- ');
          continue;
        }
        if (!this.matrix[i][j].getCover.canDrive && !this.matrix[i][j].getCover.canWalk) {
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

  public makeOneIteration(): void {
    const lines = this.getMovingLines();
    const moved: RoadUser[] = [];
    lines.forEach((list) =>
      list.traverse().forEach((cell) => {
        if (cell.occupation && !moved.includes(cell.getUser)) {
          moved.push(cell.getUser);
          cell.getUser.move();
        }
      })
    );
  }
}
