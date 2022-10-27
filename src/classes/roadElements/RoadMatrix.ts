import Cell from './Cell'
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout'

export default class RoadMatrix { // Facade
    private MatrixSize: number;

    public Matrix: Cell[][];

    public Highway: Connection[];

    public Crossroads: Crossroad[];

    public RoundAbouts: RoundAbout[];

    constructor(size: number) {
        this.MatrixSize = size;
        this.Matrix = new Array(0);
        this.Highway = new Array(0);
        for (let i = 0; i < this.MatrixSize; i++) {
            this.Matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.Matrix[i][j] = new Cell(false, false);
            }
        }
        this.Highway[0] = new Connection(this.Matrix, 0, 0, conDirection.Horizontal, 9);
        this.Highway[1] = new Connection(this.Matrix, 2, 2, conDirection.Vertical, 7);

        if (!this.Check()) {
            throw new Error("Something went wrong");
        }
    }

    Check(): boolean {
        // to do
        return true;
    }
}