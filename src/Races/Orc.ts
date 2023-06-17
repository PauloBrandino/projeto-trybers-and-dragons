import Race from "./Race";

export default class Orc extends Race {
    static maxLifePoints: number;
    private static count: number = 0

    constructor(name: string, dexterity: number, maxLifePoints: number = 74) {
        super(name, dexterity)
        Orc.maxLifePoints = maxLifePoints
        Orc.count += 1
    }

    public get maxLifePoints(): number {
        return Orc.maxLifePoints
    }

    public static createdRacesInstances(): number {
        return this.count
    }
}