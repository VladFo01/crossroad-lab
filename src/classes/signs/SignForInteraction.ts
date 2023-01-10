import { SignIsFor } from '../../utils/constants/signIsFor';
import { RoadUser } from '../trafficParticipants/RoadUser';
import { Sign, SignProps } from './Sign';

export interface SignForInteractionProps extends SignProps {
  isFor?: SignIsFor;
}

export class SignForInteraction extends Sign {
  protected isFor?: SignIsFor;

  constructor({ cell, image, isFor }: SignForInteractionProps) {
    super({ cell, image });

    this.isFor = isFor;
  }

  // eslint-disable-next-line class-methods-use-this
  public callback(roadUser: RoadUser): RoadUser {
    return roadUser;
  }
}