import Character from './Character';

export default class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Undead';
    this.attack = 40;
    this.defend = 10;
  }
}
