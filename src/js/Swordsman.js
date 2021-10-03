import Character from './Character';

export default class Swordsman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defend = 10;
  }
}
