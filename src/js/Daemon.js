import Character from './Character';

export default class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.level = 1;
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
