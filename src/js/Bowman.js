import Character from './Character';

export default class Bowman extends Character {
  constructor(...params) {
    super(...params);
    this.level = 1;
    this.type = 'Bowman';
    this.attack = 25;
    this.defend = 25;
  }
}
