import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    const players = [this.player, this._player2];

    const fightPVP = () => {
      const verifyLifePoints = players.every((player) => player.lifePoints > 0);
      return !!verifyLifePoints;
    };
    while (fightPVP()) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }

    return super.fight();
  }
}