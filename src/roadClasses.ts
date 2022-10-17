namespace RoadClasses {
    class Cell {
        private isOccupied: boolean;
        public isRideable: boolean;
        public hasCrosswalk: boolean;
        constructor(hasCrosswalk: boolean, occ: boolean, ride: boolean) {
            this.isOccupied = occ;
            this.isRideable = ride;
            this.hasCrosswalk = hasCrosswalk;
        }
        set setOccupation(occ: boolean) {
            this.isOccupied = occ;
        }
        get getOccupation(): boolean {
            return this.isOccupied;
        }
    }

    export class RoadMatrix { // Фасад
        MatrixSize: number;
        Matrix: Cell[][];
       
        constructor(size: number) {
            this.MatrixSize = size;
            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size; j++) {
                    this.Matrix[i][j] = new Cell(false, false, false);
                }
            }
        }



        Check(): boolean {
            // will be done
            return true;
        }
    }
}

const roadMatrix = new RoadClasses.RoadMatrix(50);

