import Race from "./Race";

export default class Elf extends Race {
    static maxLifePoints: number;
    private static count: number = 0

    constructor(name: string, dexterity: number, maxLifePoints: number = 99) {
        super(name, dexterity)
        Elf.maxLifePoints = maxLifePoints
        Elf.count += 1
    }

    public get maxLifePoints(): number {
        return Elf.maxLifePoints
    }

    public static createdRacesInstances(): number {
        return this.count
    }
}