/* eslint-disable no-param-reassign */
import { Direction } from '../../utils/constants/Direction';
import { maxChangeDirectionAmount } from '../../utils/constants/maxChangeDirectionAmount';
import { generateRandNumber } from '../../utils/helpers/generateRandNumber';
import { RoadUser } from '../trafficParticipants/RoadUser';
import { SignForInteraction, SignForInteractionProps } from './SignForInteraction';

interface SignToChangeDirectionProps extends SignForInteractionProps {
  possibleDirections: Direction[];
}

export class SignToChangeDirection extends SignForInteraction {
  private readonly possibleDirections: Direction[];

  constructor({ cell, isFor, image, possibleDirections }: SignToChangeDirectionProps) {
    super({ cell, image, isFor });

    this.possibleDirections = possibleDirections;
  }

  private getNextDirection(): Direction {
    const nextDirectionIndex = generateRandNumber(0, this.possibleDirections.length - 1);
    return this.possibleDirections[nextDirectionIndex];
  }

  public override callback(roadUser: RoadUser): RoadUser {
    if (roadUser.getChangeDirectionAmount === maxChangeDirectionAmount) {
      return roadUser;
    }

    const nextDirection = this.getNextDirection();
    if (nextDirection !== roadUser.getDirection) {
      roadUser.increaseChangeDirectionAmount();
    }

    roadUser.setDirection = nextDirection;

    return roadUser;
  }
}
