/* eslint-disable no-param-reassign */
import { RoadUser } from '../classes/trafficParticipants/RoadUser';
import { Pedestrian } from '../classes/trafficParticipants/Pedestrian';
import { Vehicle } from '../classes/trafficParticipants/Vehicle';
import { Velocity } from '../utils/constants/Velocity';
import { Direction } from '../utils/constants/Direction';
import Cell from '../classes/roadElements/Cell';
import { Priority } from '../utils/constants/Priority';
import { Occupier } from '../utils/constants/Occupier';

class EntitySpawner {
  private pedestrianVel: number;
  private vehicleVel: number;

  constructor() {
    this.pedestrianVel = Velocity.PEDESTRIAN;
    this.vehicleVel = Velocity.VEHICLE;
  }

  public spawn(cell: Cell, occ: Occupier, dir: Direction): RoadUser {
    if (cell.getUser) return null;
    let entity: RoadUser;

    switch (occ) {
      case Occupier.PEDESTRIAN:
        entity = new Pedestrian(cell, Priority.PEDESTRIAN, this.pedestrianVel, dir);
        break;
      case Occupier.VEHICLE:
        entity = new Vehicle(cell, Priority.VEHICLE, this.vehicleVel, dir);
        break;
      default:
        console.error(`Invalid data`);
        break;
    }

    cell.setUser = entity;
    return entity;
  }
}

export default new EntitySpawner();
