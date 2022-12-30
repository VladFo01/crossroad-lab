import RoadMatrix from './classes/roadElements/RoadMatrix';
import { Vehicle } from './classes/trafficParticipants/Vehicle';
import EntitySpawner from './services/EntitySpawner';
import { Direction } from './utils/constants/Direction';
import MatrixPrinter from './utils/helpers/matrixPrinter';

console.log(`Start of the program\n\n`);

const matrix = RoadMatrix.createOnce(20);

const entitySpawner = new EntitySpawner();

const veh = entitySpawner.spawn(matrix.board[4][0], 2, Direction.DOWN);

const printer = new MatrixPrinter(matrix);

printer.print();

