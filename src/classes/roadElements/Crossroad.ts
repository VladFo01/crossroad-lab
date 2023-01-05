import ChangeDirectionMarker from '../signs/ChangeDirectionMarker';
import { Cover } from './Cell';
import RoadMatrix from './RoadMatrix';

export default class Crossroad {
  size: number;

  protected roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, markers: ChangeDirectionMarker[], size: number, x: number, y: number, cover: Cover) {
    this.size = size;
    let helper = 0;
    for (let i = x; i <= x + 1; i++) {
      if (++helper === 1) { // first iteration
        roadMatrix.board[y][i].setPossibleDirection = { down: true, left: true };
        roadMatrix.board[y + 1][i].setPossibleDirection = { down: true, right: true };
        // set 'ChangeDirectionMarkers' related to each 'Crossroad' cell
        roadMatrix.board[y][i].setChangeDirectionMarker = new ChangeDirectionMarker(roadMatrix.board[y][i]);
        roadMatrix.board[y + 1][i].setChangeDirectionMarker = new ChangeDirectionMarker(roadMatrix.board[y + 1][i]);
        
        markers.push(roadMatrix.board[y][i].getChangeDirectionMarker);
        markers.push(roadMatrix.board[y + 1][i].getChangeDirectionMarker);
      } else {
        roadMatrix.board[y][i].setPossibleDirection = { up: true, left: true };
        roadMatrix.board[y + 1][i].setPossibleDirection = { up: true, right: true };
        // set 'ChangeDirectionMarkers' related to each 'Crossroad' cell
        roadMatrix.board[y][i].setChangeDirectionMarker = new ChangeDirectionMarker(roadMatrix.board[y][i]);
        roadMatrix.board[y + 1][i].setChangeDirectionMarker = new ChangeDirectionMarker(roadMatrix.board[y + 1][i]);

        markers.push(roadMatrix.board[y][i].getChangeDirectionMarker);
        markers.push(roadMatrix.board[y + 1][i].getChangeDirectionMarker);
      }
      roadMatrix.board[y][i].setCover = cover;
      roadMatrix.board[y + 1][i].setCover = cover;
    }
    this.roadMatrix = roadMatrix;
  }

  get road(): RoadMatrix {
    return this.roadMatrix;
  }
}
