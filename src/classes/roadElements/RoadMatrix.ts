import Cell from './Cell';
import OfCell from './OfCell';
import { conDirection } from '../../utils/constants/conDirection';
import Connection from './Connection';
import Crossroad from './Crossroad';
import RoundAbout from './RoundAbout';

export default class RoadMatrix { 
    
    private static instance: RoadMatrix;

    private size: number;

    private matrix: Cell[][];

    private Highway: Connection[];

    private crossroads: Crossroad[];

    private roundAbouts: RoundAbout[];

    protected constructor(size: number) {
        this.size = size;
        this.matrix = new Array(0);
        this.Highway = new Array(0);
        for (let i = 0; i < this.size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = new Cell(this, null, false, i, j);
            }
        }
        this.Highway[0] = new Connection(this.matrix, 0, 0, conDirection.Horizontal, 9);
        this.Highway[1] = new Connection(this.matrix, 2, 2, conDirection.Vertical, 7);

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
                if(this.matrix[i][j].rideability === true &&
                    (this.matrix[i+1][j].rideability === false || 
                    this.matrix[i][j+1].rideability === false ||
                    this.matrix[i-1][j].rideability === false ||
                    this.matrix[i][j-1].rideability === false)){
                        return false;
                    }
            }
        }
        return true;
    }

    public getCell(x: number, y: number): Cell | null {
        return this.matrix[x][y];
    }

    public createCrossroad(xCoord: number, yCoord: number): void | string {
        if (this.size - 2 <= xCoord || this.size - 2 <= yCoord)
            return "Invalid coordinates for the crossroad";
        
        let crossroad = new Crossroad(this, 2, xCoord, yCoord);

        this.crossroads.push(crossroad);
    }
}

let Road = RoadMatrix.createOnce(50);

