import Cell from './Cell';
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';

export default class RoadMatrix{ // Facade
    private size: number;

    public Matrix: Cell[][];

    private Highway: Connection[];

    private Crossroads: Crossroad[];

    private RoundAbouts: RoundAbout[];

    constructor(size: number) {
        this.size = size;
        this.Matrix = new Array(0);
        this.Highway = new Array(0);
        for (let i = 0; i < this.size; i++) {
            this.Matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.Matrix[i][j] = new Cell(null, false);
            }
        }
        this.Highway[0] = new Connection(this.Matrix, 0, 0, conDirection.Horizontal, 9);
        this.Highway[1] = new Connection(this.Matrix, 2, 2, conDirection.Vertical, 7);

        if (!this.Check()) {
            throw new Error("Something went wrong");
        }
    }

    Check(): boolean {
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                if(this.Matrix[i][j].Rideability === true &&
                    (this.Matrix[i+1][j].Rideability === false || 
                    this.Matrix[i][j+1].Rideability === false ||
                    this.Matrix[i-1][j].Rideability === false ||
                    this.Matrix[i][j-1].Rideability === false)){
                        return false;
                    }
            }
        }
        return true;
    }
}
