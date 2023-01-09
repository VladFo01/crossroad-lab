/* eslint-disable no-await-in-loop */
import Cell from './classes/roadElements/Cell';
import RoadMatrix from './classes/roadElements/RoadMatrix';
import { Vehicle } from './classes/trafficParticipants/Vehicle';
import entitySpawner from './services/EntitySpawner';
import LinkedList from './services/LinkedList';
import { Direction } from './utils/constants/Direction';
import { Occupier } from './utils/constants/Occupier';
import { delay } from './utils/helpers/delay';

const vehicles: Vehicle[] = [];

async function start() {
  console.log(`Start of the program\n\n`);

  const matrix = RoadMatrix.createOnce(20);

  vehicles.push(entitySpawner.spawn(matrix.board[0][4], Occupier.VEHICLE, Direction.DOWN));
  vehicles.push(entitySpawner.spawn(matrix.board[0][14], Occupier.VEHICLE, Direction.DOWN));
  vehicles.push(entitySpawner.spawn(matrix.board[19][5], Occupier.VEHICLE, Direction.UP));
  vehicles.push(entitySpawner.spawn(matrix.board[19][15], Occupier.VEHICLE, Direction.UP));

  vehicles.push(entitySpawner.spawn(matrix.board[4][0], Occupier.VEHICLE, Direction.RIGHT));
  vehicles.push(entitySpawner.spawn(matrix.board[16][0], Occupier.VEHICLE, Direction.RIGHT));
  vehicles.push(entitySpawner.spawn(matrix.board[3][19], Occupier.VEHICLE, Direction.LEFT));
  vehicles.push(entitySpawner.spawn(matrix.board[15][19], Occupier.VEHICLE, Direction.LEFT));

  for (let i = 0; i < 20; i++) {
    console.clear();
    matrix.print();
    matrix.makeOneIteration();
    await delay(1000);
  }

  console.log(`V -> Vehicle`);
  console.log(`* -> Road`);
  console.log(`C -> Crossroad`);
  console.log(`- -> Sidewalk`);
  console.log(`= -> Crosswalk\n\n`);
}

function testList() {
  const linkedList = new LinkedList<Cell>();

  console.log(linkedList.traverse()); // [];

  const notACover = { canDrive: false, canWalk: false };

  linkedList.pushBack(new Cell(this, null, notACover, 0, 0));
  linkedList.pushBack(new Cell(this, null, notACover, 1, 1));
  linkedList.pushFront(new Cell(this, null, notACover, 2, 2));
  linkedList.pushFront(new Cell(this, null, notACover, 3, 3)); 

  console.log(linkedList.traverse()); 
}

start();

// testList();