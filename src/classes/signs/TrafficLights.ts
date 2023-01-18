/* eslint-disable no-unused-expressions */
// import { trafficLightsCooldown } from '../../utils/constants/trafficLightsCooldown';
import { delay } from '../../utils/helpers/delay';
import { Pedestrian } from '../trafficParticipants/Pedestrian';
import { RoadUser } from '../trafficParticipants/RoadUser';
import { Vehicle } from '../trafficParticipants/Vehicle';
import { SignWithState, SignWithStateProps } from './SignWithState';

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
    if (roadUser instanceof Pedestrian) {
      this.allowMove ? roadUser.stop() : roadUser.go();
    } else if (roadUser instanceof Vehicle) {
      this.allowMove ? roadUser.go() : roadUser.stop();
    }

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
