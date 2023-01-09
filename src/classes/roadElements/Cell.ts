import { Occupier } from '../../utils/constants/Occupier';
import { SignForInteraction } from '../signs/SignForInteraction';
import { SignWithStateProps } from '../signs/SignWithState';
import { RoadUser } from '../trafficParticipants/RoadUser';
import OfCell from './OfCell';
import RoadMatrix from './RoadMatrix';

export interface Cover {
  canDrive: boolean;
  canWalk: boolean;
  crossroad?: boolean;
}

export default class Cell implements OfCell {
  protected sign: SignForInteraction | SignWithStateProps;

  protected occupiedBy: Occupier;

  protected user: RoadUser;

  protected cover: Cover;

  protected canDrive: boolean;

  protected canWalk: boolean;

  protected isCrossroad: boolean;

  protected readonly xCoord: number;

  protected readonly yCoord: number;

  protected readonly roadMatrix: RoadMatrix;

  constructor(roadMatrix: RoadMatrix, occ: Occupier, cover: Cover, x: number, y: number) {
    this.roadMatrix = roadMatrix;
    this.occupiedBy = occ;
    this.cover = cover;
    this.xCoord = x;
    this.yCoord = y;
  }

  set setSign(sign: SignForInteraction | SignWithStateProps) {
    this.sign = sign;
  }

  get getSign(): SignForInteraction | SignWithStateProps | null {
    return this.sign;
  }

  set setOccupation(flag: Occupier) {
    this.occupiedBy = flag;
  }

  get occupation(): Occupier | null {
    return this.occupiedBy;
  }

  set setUser(user: RoadUser) {
    this.user = user;
  }

  get getUser(): RoadUser {
    return this.user;
  }

  set setCover(cover: Cover) {
    this.cover = cover;
  }

  get getCover(): Cover {
    return this.cover;
  }

  get yCoordinate(): number {
    return this.yCoord;
  }

  get xCoordinate(): number {
    return this.xCoord;
  }

  get getMatrix(): RoadMatrix {
    return this.roadMatrix;
  }
}