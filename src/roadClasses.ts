namespace RoadClasses {
    class Cell {
        protected isOccupied: boolean;
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
            this.isRideable = occ;
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

    class Crossroad {
        //to do
    };

    class RoundAbout {
        //to do
    };

    class Sidewalk {
        // to do
    }

    enum conDirection { Vertical, Horizontal };

    class Crosswalk {
        //massive: Cell[];
        constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
            //this.massive = [new Cell(true, true, false), new Cell(true, true, false)];
            if (direction == conDirection.Horizontal) {
                Matrix[y][x].Crosswalk = true;
                Matrix[y + 1][x].Crosswalk = true;
                Matrix[y][x + length - 1].Crosswalk = true;
                Matrix[y + 1][x + length - 1].Crosswalk = true;
            }
            else {
                Matrix[y][x].Crosswalk = true;
                Matrix[y][x + 1].Crosswalk = true;
                Matrix[y + length - 1][x].Crosswalk = true;
                Matrix[y + length - 1][x + 1].Crosswalk = true;
            }
        }
    }

    class Connection  {
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

    export class RoadMat { // Facade
        MatrixSize: number;
        Matrix: Cell[][];
        Highway: Connection[];
        Crossroads: Crossroad[];
        RoundAbouts: RoundAbout[];

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
}

const roadMatrix = new RoadClasses.RoadMat(10);
for (var i = 0; i < roadMatrix.MatrixSize; i++)
    console.log(roadMatrix.Matrix[i][i].Rideability + ' ' + roadMatrix.Matrix[i][i].Crosswalk);

