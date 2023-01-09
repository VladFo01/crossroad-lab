import { Sign, SignProps } from './Sign';

export interface SignWithStateProps extends SignProps {
  cooldown: number;
}

export class SignWithState extends Sign {
  protected cooldown: number;
  protected timeOfNextChangeState: number;

  constructor({ cooldown, image, cell }: SignWithStateProps) {
    super({ image, cell });
    this.cooldown = cooldown;

    this.updateTimeOfNextChangeState();
  }

  protected canChangeState() {
    const currentTime = Date.now();

    if (this.timeOfNextChangeState >= currentTime) {
      this.updateTimeOfNextChangeState();
      return true;
    }

    return false;
  }

  protected updateTimeOfNextChangeState() {
    this.timeOfNextChangeState = Date.now() + this.cooldown;
  }
}