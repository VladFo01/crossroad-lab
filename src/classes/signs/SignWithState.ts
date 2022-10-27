import { Sign, SignProps } from "./Sign";

export interface SignWithStateProps extends SignProps {
    cooldown: number
}

export class SignWithState extends Sign {
    protected cooldown: number

    protected timeOfNextChangeState: number

    constructor({ cooldown, image, cell }: SignWithStateProps) {
        super({ image, cell });
        this.cooldown = cooldown;
        this.timeOfNextChangeState = Date.now() + this.cooldown;
    }

    public canChangeState(time: Date) {
        return this.timeOfNextChangeState <= time.getTime();
    }
}