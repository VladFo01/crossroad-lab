/* eslint-disable no-await-in-loop */
import Cell from './classes/roadElements/Cell';
import RoadMatrix from './classes/roadElements/RoadMatrix';
import LinkedList from './services/LinkedList';
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

function testList() {
  const linkedList = new LinkedList<Cell>();

  console.log(linkedList.traverse()); // [];

  const notACover = { canDrive: false, canWalk: false };

  linkedList.pushBack(new Cell(this, 0, 0));
  linkedList.pushBack(new Cell(this, 1, 1));
  linkedList.pushFront(new Cell(this, 2, 2));
  linkedList.pushFront(new Cell(this, 3, 3)); 

  console.log(linkedList.traverse()); 
}

start();

// testList();