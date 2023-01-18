// import { trafficLightsCooldown } from '../../utils/constants/trafficLightsCooldown';
import { SignWithState, SignWithStateProps } from './SignWithState';

interface TrafficLightsProps extends SignWithStateProps {
  defaultCanMove: boolean;
}

export class TrafficLights extends SignWithState {
  private allowMove: boolean;

  constructor({ image, defaultCanMove, cooldown }: TrafficLightsProps) {
    super({ image, cooldown });
    this.allowMove = defaultCanMove;
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
