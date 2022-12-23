import Cell from "./Cell";
import OfCell from "./OfCell";

export default class Crossroad implements OfCell{
    size: number;
    massive:Cell[][];
    constructor(size:number, Matrix:Cell[][], x:number, y:number){
        this.size = size;
        for(let i = x; i <= x + 1; i++){
            Matrix[i][y].Rideability = true; this.massive[i][y].Rideability = true;
            Matrix[i][y+1].Rideability = true; this.massive[i][y+1].Rideability = true;
        }
    }
};