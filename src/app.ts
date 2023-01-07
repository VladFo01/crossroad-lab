/* eslint-disable no-await-in-loop */
import RoadMatrix from './classes/roadElements/RoadMatrix';
import { Vehicle } from './classes/trafficParticipants/Vehicle';
import EntitySpawner from './services/EntitySpawner';
import { Direction } from './utils/constants/Direction';
import { delay } from './utils/helpers/delay';
import MatrixPrinter from './utils/helpers/matrixPrinter';

const vehicles: Vehicle[] = [];

async function start() {
  console.log(`Start of the program\n\n`);

  const matrix = RoadMatrix.createOnce(20);

  const entitySpawner = new EntitySpawner();

  vehicles.push(entitySpawner.spawn(matrix.board[0][4], 2, Direction.DOWN));
  vehicles.push(entitySpawner.spawn(matrix.board[0][14], 2, Direction.DOWN));
  // vehicles.push(entitySpawner.spawn(matrix.board[19][5], 2, Direction.UP));
  // vehicles.push(entitySpawner.spawn(matrix.board[19][15], 2, Direction.UP));

  // vehicles.push(entitySpawner.spawn(matrix.board[4][0], 2, Direction.RIGHT));
  // vehicles.push(entitySpawner.spawn(matrix.board[16][0], 2, Direction.RIGHT));
  // vehicles.push(entitySpawner.spawn(matrix.board[3][19], 2, Direction.LEFT));
  // vehicles.push(entitySpawner.spawn(matrix.board[15][19], 2, Direction.LEFT));

  const printer = new MatrixPrinter(matrix);

  for (let i = 0; i < 20; i++) {
    console.clear();
    printer.print();
    vehicles.forEach((v) => v.move());
    await delay(500);
  }

  console.log(`V -> Vehicle`);
  console.log(`* -> Road`);
  console.log(`C -> Crossroad`);
  console.log(`- -> Sidewalk`);
  console.log(`= -> Crosswalk\n\n`);
}

start();
