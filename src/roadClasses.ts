namespace RoadClasses {
    class Cell {
        public isOccupied: boolean;
        protected isRideable: boolean;
        protected hasCrosswalk: boolean;
        constructor(hasCrosswalk: boolean, occ: boolean, ride: boolean) {
            this.isOccupied = occ;
            this.isRideable = ride;
            this.hasCrosswalk = hasCrosswalk;
        }
        set setOccupation(occ: boolean) {
            this.isOccupied = occ;
        }
        get Occupation(): boolean {
            return this.isOccupied;
        }
        set Rideability(occ: boolean) {
            this.isOccupied = occ;
        }
        get Rideability(): boolean {
            return this.isRideable;
        }
        set Crosswalk(has: boolean) {
            this.hasCrosswalk = has;
        }
        get Crosswalk(): boolean {
            return this.hasCrosswalk;
        }
    }

    interface ofCell {
        Matrix: Cell[][];
    }

    enum conDirection { Vertical, Horizontal };

    class Crosswalk {
        //massive: Cell[];
        constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
            //this.massive = [new Cell(true, true, false), new Cell(true, true, false)];
            if (direction == conDirection.Horizontal) {
                Matrix[y][x].Crosswalk = true;
                Matrix[y + 1][x].Crosswalk = true;
                Matrix[y][x + length].Crosswalk = true;
                Matrix[y + 1][x + length].Crosswalk = true;
            }
            else {
                Matrix[y][x].Crosswalk = true;
                Matrix[y][x + 1].Crosswalk = true;
                Matrix[y + length][x].Crosswalk = true;
                Matrix[y + length][x + 1].Crosswalk = true;
            }
        }
    }

    class Connection {
        //massive: Cell[][];
        crosswalk: Crosswalk;
        constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
            this.crosswalk = new Crosswalk(Matrix, x, y, direction, length);
            // to do
            if (direction == conDirection.Horizontal) {
                for (var i = x; i < x + length; i++) {
                    Matrix[y][i].Rideability = true;
                    Matrix[y + 1][i].Rideability = true;
                }
            }
            else {
                for (var i = y; i < y + length; i++) {
                    Matrix[i][x].Rideability = true;
                    Matrix[i][x + 1].Rideability = true;
                }
            }
        }
    }

    export class RoadMatrix implements ofCell { // Facade
        MatrixSize: number;
        Matrix: Cell[][];
        Highway: Connection[];

        constructor(size: number) {
            this.MatrixSize = size;
            this.Matrix = new Array(0);
            this.Highway = new Array(0);
            for (var i = 0; i < this.MatrixSize; i++) {
                this.Matrix.push([]);
                for (var j = 0; j < size; j++) {
                    this.Matrix[i][j] = new Cell(false, false, false);
                }
            }
            this.Highway[0] = new Connection(this.Matrix, 0, 0, conDirection.Horizontal, 40);
            this.Highway[1] = new Connection(this.Matrix, 5, 5, conDirection.Vertical, 40);
        }

        Check(): boolean {
            // will be done
            return true;
        }
    } 

}

const roadMatrix = new RoadClasses.RoadMatrix(50);
for (var i = 0; i < roadMatrix.MatrixSize; i++)
    console.log(roadMatrix.Matrix[i][i].isOccupied);