import Character from './character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', attack = 25, defence = 25) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}