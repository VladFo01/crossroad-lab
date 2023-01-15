import { Velocity } from '../../utils/constants/Velocity';
import { RoadUser } from './RoadUser';
import { SignForInteraction } from '../signs/SignForInteraction';
import { Vehicle } from './Vehicle';
import { generateRandNumber } from '../../utils/helpers/generateRandNumber';
import { Direction } from '../../utils/constants/Direction';
import { maxChangeDirectionAmount } from '../../utils/constants/maxChangeDirectionAmount';

export class Pedestrian extends RoadUser {

    public move(): boolean | string {
        const xCurrent = this.cell.xCoordinate; // поточні координати
        const yCurrent = this.cell.yCoordinate;
    
        if (this.cell.getSign && this.cell.getSign instanceof SignForInteraction) {
          this.cell.getSign.callback(this);
        }
    
        let xNew: number;
        let yNew: number; // кінцеві координати

        let previousDirection = this.direction;

        //вибір направлення
        let Directions: boolean[] = [false, false, false, false];
        let possibleDirAmount: number = 0; 
        if(this.cell.getMatrix.getCell(xCurrent - 1, yCurrent) && this.cell.getMatrix.getCell(xCurrent - 1, yCurrent).getCover.canWalk) {Directions[0] = true; possibleDirAmount++;}
        if(this.cell.getMatrix.getCell(xCurrent, yCurrent - 1) && this.cell.getMatrix.getCell(xCurrent, yCurrent - 1).getCover.canWalk) {Directions[1] = true; possibleDirAmount++;}
        if(this.cell.getMatrix.getCell(xCurrent + 1, yCurrent) && this.cell.getMatrix.getCell(xCurrent + 1, yCurrent).getCover.canWalk) {Directions[2] = true; possibleDirAmount++;} 
        if(this.cell.getMatrix.getCell(xCurrent, yCurrent + 1) && this.cell.getMatrix.getCell(xCurrent, yCurrent + 1).getCover.canWalk) {Directions[3] = true; possibleDirAmount++;}

        let randDir: number = generateRandNumber(0, possibleDirAmount);
        switch(randDir){
          case 0:
            if(Directions[0]){
              this.direction = Direction.UP;
              break;
            }
          case 1:
            if(Directions[1]){
              this.direction = Direction.RIGHT;
              break;
            }
          case 2:
            if(Directions[2]){
              this.direction = Direction.DOWN;
              break;
            }
          case 3:
            if(Directions[3]){
              this.direction = Direction.LEFT;
              break;
            }
          default:
            break;  
        }
        
        if(this.changeDirectionAmount >= maxChangeDirectionAmount) this.direction = previousDirection;
        if(this.direction != previousDirection) this.changeDirectionAmount++;
        
        switch (
          this.direction // обчислення наступних координат
        ) {
          case 'Up':
            xNew = xCurrent;
            yNew = yCurrent - this.currentVelocity;
            break;
          case 'Down':
            xNew = xCurrent;
            yNew = yCurrent + this.currentVelocity;
            break;
          case 'Left':
            xNew = xCurrent - this.currentVelocity;
            yNew = yCurrent;
            break;
          case 'Right':
            xNew = xCurrent + this.currentVelocity;
            yNew = yCurrent;
            break;
          default:
            console.log(`Cannot recognize direction ${this.direction}`);
            return false;
        }
    
        const nextCell = this.cell.getMatrix.getCell(xNew, yNew);
    
        // якщо вийшли за краї матриці
        if (!nextCell) {
          this.cell.setUser = null; // звільнення старої клітинки
          return 'out of bounds';
        }
    
        // якщо по ній не можна пройти
        if (!nextCell.getCover.canWalk) return false;
    
        // якщо наступна клітинка зайнята автомобілем
        if (nextCell.getUser instanceof Vehicle) return false;
    
        this.cell.setUser = null; // звільнення старої клітинки
    
        this.cell = nextCell;
        this.cell.setUser = this;
    
        return true;
      }
}
