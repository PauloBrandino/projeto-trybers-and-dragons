import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _typeDamage: EnergyType;
  private static count = 0;

  constructor(name: string) {
    super(name);
    this._typeDamage = 'mana';
    Necromancer.count += 1;
  }

  public get energyType(): EnergyType {
    return this._typeDamage;
  }

  public static createdArchetypeInstances(): number {
    return this.count;
  }
}