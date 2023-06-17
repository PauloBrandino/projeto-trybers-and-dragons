// type RaceParams = {
//     name: string,
//     dexterity: number;
// }

abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

export default Race;