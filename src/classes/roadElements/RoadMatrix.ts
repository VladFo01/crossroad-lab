import Cell from './Cell';
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';

export default class RoadMatrix { 
    
    private static instance: RoadMatrix;

    private size: number;

    private Matrix: Cell[][];

    private Highway: Connection[];

    private Crossroads: Crossroad[];

    private RoundAbouts: RoundAbout[];

    protected constructor(size: number) {
        this.size = size;
        this.Matrix = new Array(0);
        this.Highway = new Array(0);
        for (let i = 0; i < this.size; i++) {
            this.Matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.Matrix[i][j] = new Cell(this, null, false, i, j);
            }
        }
        this.Highway[0] = new Connection(this.Matrix, 0, 0, conDirection.Horizontal, 9);
        this.Highway[1] = new Connection(this.Matrix, 2, 2, conDirection.Vertical, 7);

        if (!this.Check()) {
            throw new Error("Something went wrong");
        }
    }

    public static createOnce(size:number): RoadMatrix {
        if(!RoadMatrix.instance) RoadMatrix.instance = new RoadMatrix(size);
        return RoadMatrix.instance;
    }

    Check(): boolean {
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                if(this.Matrix[i][j].rideability === true &&
                    (this.Matrix[i+1][j].rideability === false || 
                    this.Matrix[i][j+1].rideability === false ||
                    this.Matrix[i-1][j].rideability === false ||
                    this.Matrix[i][j-1].rideability === false)){
                        return false;
                    }
            }
        }
        return true;
    }

    public getCell(x: number, y: number): Cell | null {
        return this.Matrix[x][y];
    }
}

let Road : RoadMatrix = RoadMatrix.createOnce(50);

