/* eslint-disable no-await-in-loop */
import RoadMatrix from './classes/roadElements/RoadMatrix';
import { Vehicle } from './classes/trafficParticipants/Vehicle';
import entitySpawner from './services/EntitySpawner';
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
