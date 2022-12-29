import RoadMatrix from "./classes/roadElements/RoadMatrix";
import MatrixPrinter from "./utils/helpers/matrixPrinter";

const matrix = RoadMatrix.createOnce(20);

const printer = new MatrixPrinter(matrix);

printer.print();


