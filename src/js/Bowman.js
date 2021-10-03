import Character from './Character';

export default class Bowman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Bowman';
    this.attack = 25;
    this.defend = 25;
  }
}
