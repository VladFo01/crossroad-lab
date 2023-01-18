/* eslint-disable no-await-in-loop */
import RoadMatrix from './classes/roadElements/RoadMatrix';
import { delay } from './utils/helpers/delay';

async function start() {
  console.log(`Start of the program\n\n`);

  const matrix = RoadMatrix.createOnce(20);

  for (let i = 0; i < 50; i++) {
    console.clear();
    matrix.print();
    matrix.makeOneIteration();
    await delay(500);
  }
}

start();
