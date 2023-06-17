import Race from "./Race";

export default class Dwarf extends Race {
    static maxLifePoints: number;
    private static count: number = 0

    constructor(name: string, dexterity: number, maxLifePoints: number = 80) {
        super(name, dexterity)
        Dwarf.maxLifePoints = maxLifePoints
        Dwarf.count += 1
    }

    public get maxLifePoints(): number {
        return Dwarf.maxLifePoints
    }

    public static createdRacesInstances(): number {
        return this.count
    }
}