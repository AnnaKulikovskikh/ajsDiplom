export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
    //if (new.target) throw new Error('Низзя!');
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      if (this.attack + this.attack * (1.8 - this.health) /100 > this.attack) {
        this.attack += Math.max(this.attack * (1.8 - this.health)/100);
      }
      if (this.defence + this.defence * (1.8 - this.health) /100 > this.defence) {
        this.defence += Math.max(this.defence * (1.8 - this.health)/100);
      }
      this.health += 80;
      if (this.health > 100) this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
