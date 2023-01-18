/* eslint-disable no-unused-expressions */
// import { trafficLightsCooldown } from '../../utils/constants/trafficLightsCooldown';
import { delay } from '../../utils/helpers/delay';
import { Pedestrian } from '../trafficParticipants/Pedestrian';
import { RoadUser } from '../trafficParticipants/RoadUser';
import { Vehicle } from '../trafficParticipants/Vehicle';
import { SignWithState, SignWithStateProps } from './SignWithState';
import { PedestrianStrategy } from './trafficLightsStrategies/PedestrianStrategy';
import { TrafficLightsStrategy } from './trafficLightsStrategies/TrafficLightsStrategy';
import { VehicleStrategy } from './trafficLightsStrategies/VahicleStrategy';

interface TrafficLightsProps extends SignWithStateProps {
  defaultCanMove: boolean;
}

export class TrafficLights extends SignWithState {
  private allowMove: boolean;

  constructor({ image, defaultCanMove, cooldown }: TrafficLightsProps) {
    super({ image, cooldown });
    this.allowMove = defaultCanMove;

    this.changeState();
  }

  public override callback(roadUser: RoadUser): RoadUser {
    let strategy: TrafficLightsStrategy;

    if (roadUser instanceof Pedestrian) {
      strategy = new PedestrianStrategy(this.allowMove);
    } else if (roadUser instanceof Vehicle) {
      strategy = new VehicleStrategy(this.allowMove);
    }

    strategy.processRoadUser(roadUser);

    return roadUser;
  }

  public async changeState() {
    if (this.canChangeState()) {
      this.allowMove = !this.allowMove;
    }

    await delay(1000);
    this.changeState();
  }
}
