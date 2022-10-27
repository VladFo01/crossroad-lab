import { Sign, SignProps } from "./Sign";

interface TrafficLightsProps extends SignProps {
    defaultCanMove: boolean
}

export class TrafficLights extends Sign {
    private allowMove: boolean

    constructor({ cell, image, defaultCanMove }: TrafficLightsProps) {
        super({ cell, image });
        // TODO: implement setting image to Cell
        // this.cell.image = this.image;
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