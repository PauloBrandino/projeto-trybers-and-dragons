import Race from "./Race";

export default class Halfling extends Race {
    static maxLifePoints: number;
    private static count: number = 0

    constructor(name: string, dexterity: number, maxLifePoints: number = 60) {
        super(name, dexterity)
        Halfling.maxLifePoints = maxLifePoints
        Halfling.count += 1
    }

    public get maxLifePoints(): number {
        return  Halfling.maxLifePoints
    }

    public static createdRacesInstances(): number {
        return this.count
    }
}