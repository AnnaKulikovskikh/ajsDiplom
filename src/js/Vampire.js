import Character from './Character';

export default class Vampore extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Vampire';
    this.attack = 25;
    this.defend = 25;
  }
}
