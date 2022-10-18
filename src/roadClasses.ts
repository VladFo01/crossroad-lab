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
            this.isOccupied = occ;
        }
        get Rideability(): boolean {
            return this.isRideable;
        }
        set Crosswalk(occ: boolean) {
            this.isOccupied = occ;
        }
        get Crosswalk(): boolean {
            return this.hasCrosswalk;
        }
    }

    interface ofCell {
        massive: Cell[][];
    }

    enum conDirection { Vertical, Horizontal };

    class Crosswalk {
        private massive: Cell[];
        constructor(connection:Cell[][], direction: conDirection) {
            this.massive = [new Cell(true, true, false), new Cell(true, true, false)];
            if (direction == conDirection.Vertical) {
                //fill smlike
            }
            else {
                //fill smlike
            }
        }
    }

    class Connection implements ofCell {
        massive: Cell[][];
        crosswalk: Crosswalk;
        constructor(Matrix: Cell[][], x: number, y: number, direction: conDirection, length: number) {
            this.crosswalk = new Crosswalk(this.massive, direction);
            // to do
        }
    }

    export class RoadMatrix { // Facade
        MatrixSize: number;
        Matrix: Cell[][];
        Highway: Connection;

        constructor(size: number) {
            this.MatrixSize = size;
            for (var i = 0; i < this.MatrixSize; i++) {
                for (var j = 0; j < size; j++) {
                    this.Matrix[i][j] = new Cell(false, false, false);
                }
            }
            this.Highway = new Connection(this.Matrix, 10, 10, conDirection.Horizontal, 20);
        }

        Check(): boolean {
            // will be done
            return true;
        }
    }
}

const roadMatrix = new RoadClasses.RoadMatrix(50);
console.log(roadMatrix.Matrix[0][0].Occupation);

