import { trafficLightsCooldown } from '../../utils/constants/trafficLightsCooldown';
import { SignWithState, SignWithStateProps } from './SignWithState';
import { delay } from '../../utils/helpers/delay';

interface TrafficLightsProps extends SignWithStateProps {
  defaultCanMove: boolean;
}

export class TrafficLights {
  private allowMove: boolean;
  private cooldown: number;
  private timeOfNextChangeState: number;

  constructor(defaultCanMove: boolean, cooldown: number) {
    // TODO: implement setting image to Cell
    // this.cell.image = this.image;
    this.allowMove = defaultCanMove;
    this.cooldown = trafficLightsCooldown;
    this.timeOfNextChangeState = Date.now() + this.cooldown;
  }

  public changeState() {
    this.allowMove = !this.allowMove;
  }

  get canMoveCar() {
    return this.allowMove;
  }

  get canMovePedestrian() {
    return !this.allowMove;
  }
}
