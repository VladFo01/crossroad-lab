import { trafficLightsCooldown } from "../../utils/constants/trafficLightsCooldown";
import { SignWithState, SignWithStateProps } from "./SignWithState";

interface TrafficLightsProps extends SignWithStateProps {
    defaultCanMove: boolean
}

export class TrafficLights extends SignWithState {
    private allowMove: boolean

    constructor({
        cell,
        image,
        defaultCanMove,
        cooldown,
    }: TrafficLightsProps) {
        super({ cell, image, cooldown });
        // TODO: implement setting image to Cell
        // this.cell.image = this.image;
        this.allowMove = defaultCanMove;
        this.cooldown = trafficLightsCooldown;
        this.timeOfNextChangeState = Date.now() + this.cooldown;
    }

    public changeState() {
        this.allowMove = !this.allowMove;
        this.timeOfNextChangeState = Date.now() + this.cooldown;
    }

    get canMoveCar() {
        return this.allowMove;
    }

    get canMovePedestrian() {
        return !this.allowMove;
    }
}