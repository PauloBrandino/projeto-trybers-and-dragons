import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type PVEType = Fighter | SimpleFighter; 

export default class PVE extends Battle {
  private _enemies: PVEType[];
  constructor(player: Fighter, enemies: PVEType[]) {
    super(player);
    this._enemies = enemies;
  }

  fight(): number {
    const players = [this.player, ...this._enemies];

    const fightPVP = () => {
      const verifyLifePoints = players.every((player) => player.lifePoints > 0);
      return verifyLifePoints;
    };

    while (fightPVP()) {
      this._enemies.forEach((enemy) => {
        this.player.attack(enemy);
        enemy.attack(this.player);
      });
    }

    return super.fight();
  }
}
