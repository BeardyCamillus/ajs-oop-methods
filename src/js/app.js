import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

class Game {
  constructor() {
    this.activeCharacters = [];
    this.activeCharacters.push(
      new Zombie('zombie'),
      new Undead('undead'),
      new Daemon('daemon'),
      new Magician('magician'),
      new Swordsman('swordsman'),
      new Bowman('bowman'),
    );
  }
}

const game = new Game();
console.log(game);

game.activeCharacters.forEach((character) => {
  character.levelUp();
  character.damage(10);
  console.log(character);
});